export const apiConstants = ["REQUEST", "SUCCESS", "FAILURE"];

export const createConstants = (namespace: string, prefix: string = "") => (
  ...constants: Array<string>
) => {
  return constants.reduce(
    (result: any, constant: any) => ({
      [constant.toUpperCase()]: `${namespace}/${
        prefix ? `${prefix.toUpperCase()}_` : ""
      }${constant.toUpperCase()}`,
      ...result
    }),
    {}
  );
};

export const createApiConstants = (...args: Array<any>) => {
  return (createConstants as any)(...args)(...apiConstants);
};
