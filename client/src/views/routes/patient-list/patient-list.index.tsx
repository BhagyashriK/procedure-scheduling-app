import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory, Route } from "react-router-dom";
import moment from "moment";

import { FormControl } from "../../../styles/form";
import { Container, Row } from "../../../styles/layout";
import { LinkButton, Button } from "../../../styles/button";
import { FilterWrapper } from "../../../styles/filters";
import Header from "../../components/header/header.index";
import Table from "../../components/table/table.index";
import Message from "../../components/message/message.index";
import Loader from "../../components/loader/loader.index";
import AddPatient from "../add-patient/add-patient.index";

import { getPatients } from "./patient-list.action";

const PatientList: React.FC<{
  getPatients: any;
  list: Array<any>;
  isLoading: boolean;
  errorMessage: any;
}> = ({ getPatients, list, isLoading, errorMessage }) => {
  let history = useHistory();
  const [searchTerm, setSearchTerm] = useState("");

  const goToDetails = (id: number) => () => {
    history.push(`/patient/?id=${id}`);
  };

  const addNewPatient = () => {
    history.push("/patients/add");
  };

  const searchByPatientName = (e: any) => {
    setSearchTerm(e.target.value);
    getPatients({ q: e.target.value });
  };

  useEffect(() => {
    getPatients();
  }, [getPatients]);

  // Table header configuration
  const header = [
    { label: "Patient Name", value: "name" },
    { label: "Doctor Name", value: "drName" },
    { label: "Room", value: "room" },
    { label: "Planned Start Time", value: "plannedOn" },
    { label: "Status", value: "status" },
    { label: "Actions", value: "actions" }
  ];

  // Table content formating
  const content = list.map((patient: any) => ({
    ...patient,
    status: patient.status || "-",
    plannedOn: patient.plannedOn
      ? moment(patient.plannedOn).format("DD MMM YYYY HH:MM")
      : "-",
    actions: <LinkButton onClick={goToDetails(patient.id)}>Schedule</LinkButton>
  }));

  return (
    <>
      <Header>
        <h3>Patients</h3>
      </Header>
      <Container data-testid="patient-list-wrapper">
        {/* Show error message if error occurs */}
        {errorMessage ? (
          <Message message={errorMessage} type="error"></Message>
        ) : (
          <Row>
            {/* Filter section */}
            <FilterWrapper>
              <FormControl
                type="text"
                value={searchTerm}
                placeholder="Search by patient name"
                onChange={searchByPatientName}
              />
              <Button onClick={addNewPatient}>Add Patient</Button>
            </FilterWrapper>
            {/* Show loader if request is in progress */}
            {isLoading ? (
              <Loader />
            ) : (
              <>
                <Table
                  header={header}
                  content={content}
                  testId="patient-list"
                ></Table>
                {/* Show empty message if list is empty */}
                {list.length === 0 && <Message message="No Content"></Message>}
              </>
            )}
          </Row>
        )}
      </Container>
      {/* Route configuration for add patient modal */}
      <Route path="/patients/add" component={AddPatient} />
    </>
  );
};

const mapStateToProps = ({ patients }: any) => {
  return {
    list: patients.list,
    isLoading: patients.isLoading,
    errorMessage: patients.errorMessage
  };
};

export default connect(
  mapStateToProps,
  { getPatients }
)(PatientList);
