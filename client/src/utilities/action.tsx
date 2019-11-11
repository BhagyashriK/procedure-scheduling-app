// For more info check https://github.com/acdlite/flux-standard-action

export const createAction = (type: string, error: boolean = false) => (
  payload = {},
  meta = {}
) => ({
  type,
  payload,
  meta,
  error
});

export const createErrorAction = (type: any) => createAction(type, true);

const mergeMeta = (left = {}, right = {}) => {
  const newMeta = { ...left, ...right };
  return Object.keys(newMeta).length ? newMeta : {};
};

interface constants {
  REQUEST: string;
  SUCCESS: string;
  FAILURE: string;
}

interface options {
  meta?: object;
}

export const createApiAction = (
  constants: constants,
  request: any,
  options: options = {}
) => {
  const requestAction = createAction(constants.REQUEST);
  const successAction = createAction(constants.SUCCESS);
  const failureAction = createErrorAction(constants.FAILURE);

  return (payload: object, meta = {}) => (dispatch: any, getState: any) => {
    const finalMeta = mergeMeta(options.meta, meta);
    dispatch(requestAction(payload, finalMeta));
    return request(payload, finalMeta, dispatch, getState)
      .then((response: any) => {
        const data = response && response.data ? response.data : response;
        dispatch(successAction(data, finalMeta));
        return response;
      })
      .catch((error: object) => {
        dispatch(failureAction(error, finalMeta));
        throw error;
      });
  };
};
