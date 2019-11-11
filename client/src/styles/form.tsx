import styled from "../utilities/styled";

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
  margin-left: -5px;
  margin-right: -5px;
  > * {
    margin-left: 5px;
    margin-right: 5px;
  }
`;

export const Label = styled.label`
  width: 100%;
  margin-bottom: 5px;
  padding-top: 5px;
  font-size: 0.8rem;
  text-align: left;
  color: ${props => props.theme.LABEL_TEXT};
`;

export const Mandatory = styled.span`
  margin-left: 5px;
  color: ${props => props.theme.ERROR};
  &:after {
    content: "*";
  }
`;

export const Value = styled.div`
  font-size: 0.9rem;
  color: ${props => props.theme.LABEL_VALUE};
  word-break: break-all;
`;

export const FormControl = styled.input`
  min-width: auto;
  height: 34px;
  padding: 0.5em;
  padding-right: 1.5em;
  background: ${props => props.theme.FORM_CONTROL_BG};
  border: 1px solid ${props => props.theme.FORM_CONTROL_BORDER_COLOR};
  border-radius: 3px;
  font-size: 0.9rem;
  color: ${props => props.theme.FORM_CONTROL_TEXT_COLOR};

  @media (min-width: 768px) {
    min-width: 7rem;
  }

  &:focus {
    outline: 0;
  }
  &::placeholder {
    color: ${props => props.theme.FORM_CONTROL_PLACEHOLDER_TEXT_COLOR};
  }
`;

export const TextArea = styled.textarea`
  min-width: auto;
  padding: 0.5em;
  padding-right: 1.5em;
  background: ${props => props.theme.FORM_CONTROL_BG};
  border: 1px solid ${props => props.theme.FORM_CONTROL_BORDER_COLOR};
  border-radius: 3px;
  font-size: 0.9rem;
  color: ${props => props.theme.FORM_CONTROL_TEXT_COLOR};
  resize: none;

  @media (min-width: 768px) {
    min-width: 7rem;
  }

  &:focus {
    outline: 0;
  }
  &::placeholder {
    color: ${props => props.theme.FORM_CONTROL_PLACEHOLDER_TEXT_COLOR};
  }
`;

export const Select = styled.select`
  min-width: auto;
  height: 34px;
  padding: 0.5em;
  padding-right: 1.5em;
  background: ${props => props.theme.FORM_CONTROL_BG};
  border: 1px solid ${props => props.theme.FORM_CONTROL_BORDER_COLOR};
  border-radius: 3px;
  font-size: 0.9rem;
  color: ${props => props.theme.FORM_CONTROL_TEXT_COLOR};
  appearance: none;
  background-position: right 50%;
  background-repeat: no-repeat;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDZFNDEwNjlGNzFEMTFFMkJEQ0VDRTM1N0RCMzMyMkIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDZFNDEwNkFGNzFEMTFFMkJEQ0VDRTM1N0RCMzMyMkIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NkU0MTA2N0Y3MUQxMUUyQkRDRUNFMzU3REIzMzIyQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0NkU0MTA2OEY3MUQxMUUyQkRDRUNFMzU3REIzMzIyQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuGsgwQAAAA5SURBVHjaYvz//z8DOYCJgUxAf42MQIzTk0D/M+KzkRGPoQSdykiKJrBGpOhgJFYTWNEIiEeAAAMAzNENEOH+do8AAAAASUVORK5CYII=);
  @media (min-width: 768px) {
    min-width: 7rem;
  }

  &:focus {
    outline: 0;
  }
`;

export const FormFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 10px 15px;
`;
