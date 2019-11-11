import styled from "../../../utilities/styled";

export const Wrapper = styled.div`
  .react-datepicker,
  .react-datepicker__header {
    background: #323d5a;
    color: #ffffff;
    border-color: #323d5a;
  }

  .react-datepicker__time-container .react-datepicker__time {
    background: #323d5a;
  }
  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item:hover {
    background: #283149;
  }
  .react-datepicker__navigation--next {
    border-left-color: #fff;
  }
  .react-datepicker__current-month,
  .react-datepicker-time__header,
  .react-datepicker-year-header,
  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    color: #fff;
  }
  .react-datepicker__day:hover,
  .react-datepicker__month-text:hover,
  .react-datepicker__quarter-text:hover {
    background: #283149;
  }

  .react-datepicker-popper[data-placement^="bottom"]
    .react-datepicker__triangle,
  .react-datepicker-popper[data-placement^="bottom"]
    .react-datepicker__triangle::before {
    border-bottom-color: #323d5a;
  }
  .react-datepicker-wrapper {
    display: flex;
  }
  .react-datepicker__input-container {
    input {
      width: 100%;
      height: 34px;
      padding: 0.5em;
      padding-right: 1.5em;
      background: ${props => props.theme.FORM_CONTROL_BG};
      border: 1px solid ${props => props.theme.FORM_CONTROL_BORDER_COLOR};
      border-radius: 3px;
      font-size: 0.9rem;
      color: ${props => props.theme.FORM_CONTROL_TEXT_COLOR};

      &:focus {
        outline: 0;
      }
      &::placeholder {
        color: ${props => props.theme.FORM_CONTROL_PLACEHOLDER_TEXT_COLOR};
      }
    }
  }
`;
