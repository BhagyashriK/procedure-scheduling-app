import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import { Button } from "../../../styles/button";
import {
  Form,
  FormGroup,
  Label,
  FormControl,
  Select,
  Mandatory
} from "../../../styles/form";
import { Col6, Row } from "../../../styles/layout";
import Modal from "../../components/modal/modal.index";
import Doctor from "../../components/doctor/doctor.index";
import Room from "../../components/room/room.index";
import Datepicker from "../../components/datepicker/datepicker.index";

import { addPatient } from "./add-patient.action";
import { getPatients } from "../patient-list/patient-list.action";

const AddPatient: React.FC<{ addPatient?: any; getPatients?: any }> = ({
  addPatient,
  getPatients
}) => {
  const history = useHistory();

  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [drName, setDrName] = useState("");
  const [room, setRoom] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(null);

  const closeModal = () => {
    history.push("/");
  };

  const checkValidity = () => {
    return !(name && gender && drName && room && dateOfBirth);
  };

  const changeField = (field: string) => (e: any) => {
    const value = e.target.value;
    switch (field) {
      case "name":
        setName(value);
        break;
      case "gender":
        setGender(value);
        break;
      case "drName":
        setDrName(value);
        break;
      case "room":
        setRoom(value);
        break;
      default:
        break;
    }
  };

  const changeDateOfBirth = (dateOfBirth: any) => {
    setDateOfBirth(dateOfBirth.valueOf());
  };

  const submit = () => {
    addPatient({ name, gender, drName, room, dateOfBirth }).then(() => {
      getPatients();
      closeModal();
    });
  };

  return (
    <Form name="patientForm" onSubmit={submit}>
      <Modal
        closeHandler={closeModal}
        title="Add Patient"
        footer={
          <Button disabled={checkValidity()} onClick={submit}>
            Save
          </Button>
        }
      >
        <Row>
          {/* Patient Name  */}
          <Col6>
            <FormGroup>
              <Label>
                Patient Name
                <Mandatory />
              </Label>

              <FormControl
                value={name}
                type="text"
                onChange={changeField("name")}
              />
            </FormGroup>
          </Col6>
          {/* Date Of Birth */}
          <Col6>
            <FormGroup>
              <Label>
                Date Of Birth
                <Mandatory />
              </Label>
              <Datepicker selected={dateOfBirth} onChange={changeDateOfBirth} />
            </FormGroup>
          </Col6>
          {/* Sex */}
          <Col6>
            <FormGroup>
              <Label>
                Gender
                <Mandatory />
              </Label>
              <Select value={gender} onChange={changeField("gender")}>
                <option value="" disabled>
                  None
                </option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Other">Other</option>
              </Select>
            </FormGroup>
          </Col6>
          {/* Doctor Name */}
          <Col6>
            <Doctor name={drName} changeCallback={changeField("drName")} />
          </Col6>
          {/* Room */}
          <Col6>
            <Room name={room} changeCallback={changeField("room")} />
          </Col6>
        </Row>
      </Modal>
    </Form>
  );
};

export default connect(
  null,
  { addPatient, getPatients }
)(AddPatient);
