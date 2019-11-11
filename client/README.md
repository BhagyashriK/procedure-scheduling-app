React-redux application for procedure scheduling to be used by doctors, secretaries and / or Nurses.

Consist of three routes:

- Patient List
- Add Patient
- Patient details/Schedule Procedure

**Tech Stack:**

React, Redux, Styled components, Jest, React Testing library, Create React App,
momentjs, json-server (for API mocks),

Other tools:
Prettier - code formatter

**Local Setup Steps:**

- clone repository using ``
- in client folder, run `yarn install` to install the dependencies into root directory
- in server folder, run `yarn install` to install server dependencies
- in client folder, run `yarn build` to build code

**Test suite Steps:**
`yarn test`

Note: `yarn start` to run application on client side

**Assumptions:**

- Using mocked data for patients, doctors and rooms .
- Given search by patient name functionality
- Data modelling can be enhanced. Assumed API returning expected result. Based on API response format, UI can consume response.
- Form implementation is basic and can be extended to complex types/validations using libraries like formik.
- Added basic Form validation like required fields. Other validations like date, description length can be added.
