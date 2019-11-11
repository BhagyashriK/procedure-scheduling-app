import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import qs from "querystring";
import moment from "moment";

import Header from "../../components/header/header.index";
import { Container, Col4, Col12, Col6 } from "../../../styles/layout";
import { IconButton, Button } from "../../../styles/button";
import {
  FormGroup,
  Label,
  Value,
  TextArea,
  Select,
  Mandatory,
  Form,
  FormFooter
} from "../../../styles/form";
import Datepicker from "../../components/datepicker/datepicker.index";
import { getPatient, updatePatient } from "./patient-details.api";
import Doctor from "../../components/doctor/doctor.index";
import Room from "../../components/room/room.index";

const PatientDetails: React.FC = () => {
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(0);
  const [gender, setGender] = useState("");
  const [drName, setDrName] = useState("");
  const [room, setRoom] = useState(0);
  const [status, setStatus] = useState("");
  const [plannedOn, setPlannedOn] = useState<any>(null);
  const [endOn, setEndOn] = useState<any>(null);
  const [description, setDescription] = useState("");

  let history = useHistory();

  const { id } = qs.parse(history.location.search.replace("?", ""));

  useEffect(() => {
    getPatient(id).then(
      ({
        data: {
          name,
          dateOfBirth,
          gender,
          drName,
          room,
          status,
          plannedOn,
          endOn,
          description
        }
      }) => {
        setName(name);
        setDateOfBirth(dateOfBirth);
        setGender(gender);
        setDrName(drName);
        setRoom(room);
        setStatus(status);
        if (plannedOn) {
          setPlannedOn(new Date(plannedOn));
        }
        if (endOn) {
          setEndOn(new Date(endOn));
        }
        setDescription(description);
      }
    );
  }, [id]);

  const gotoPatients = () => {
    history.push("/");
  };

  const changeField = (field: string) => (e: any) => {
    const value = e.target.value;
    switch (field) {
      case "status":
        setStatus(value);
        break;
      case "description":
        setDescription(value);
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

  const changeDate = (field: string) => (date: Date) => {
    switch (field) {
      case "plannedOn":
        setPlannedOn(date.valueOf());
        break;
      case "endOn":
        setEndOn(date.valueOf());
        break;
      default:
        break;
    }
  };

  const checkValidity = () => {
    return !(status && plannedOn && drName && room && status);
  };

  // Once patient is updated successfully goback to patients list
  const submit = () => {
    updatePatient({
      id,
      name,
      dateOfBirth,
      gender,
      drName,
      room,
      status,
      plannedOn,
      endOn,
      description
    }).then(success => {
      gotoPatients();
    });
  };

  return (
    <>
      <Header>
        <IconButton primary onClick={gotoPatients}>
          &#8592;
        </IconButton>
        <h3>Schedule Procedure</h3>
      </Header>
      <Container>
        <Form onSubmit={submit}>
          {/* Patient Name  */}
          <Col4>
            <FormGroup>
              <Label>Patient Name</Label>
              <Value>{name}</Value>
            </FormGroup>
          </Col4>
          {/* Date Of Birth */}
          <Col4>
            <FormGroup>
              <Label>Date Of Birth</Label>
              <Value>
                {dateOfBirth ? moment(dateOfBirth).format("DD MMM YYYY") : "-"}
              </Value>
            </FormGroup>
          </Col4>
          {/* Gender */}
          <Col4>
            <FormGroup>
              <Label>Gender</Label>
              <Value>{gender}</Value>
            </FormGroup>
          </Col4>
          {/* Doctor Name */}
          <Col4>
            <Doctor name={drName} changeCallback={changeField("drName")} />
          </Col4>
          {/* Room */}
          <Col4>
            <Room name={room} changeCallback={changeField("room")} />
          </Col4>
          {/* Status */}
          <Col4>
            <FormGroup>
              <Label>
                Status
                <Mandatory />
              </Label>
              <Select value={status} onChange={changeField("status")}>
                <option value="" disabled>
                  None
                </option>
                <option value="PLANNED">Planned</option>
                <option value="IN_PROGRESS">In Progress</option>
                <option value="FINISHED">Finished</option>
              </Select>
            </FormGroup>
          </Col4>
          {/* Planned Start Date */}
          <Col6>
            <FormGroup>
              <Label>
                Planned On
                <Mandatory />
              </Label>
              <Datepicker
                dateFormat="dd MMM yyyy hh:mm"
                showTimeSelect
                selected={plannedOn}
                onChange={changeDate("plannedOn")}
              />
            </FormGroup>
          </Col6>
          {/* Estimated End Time */}
          <Col6>
            <FormGroup>
              <Label>Estimated End Time</Label>
              <Datepicker
                dateFormat="dd MMM yyyy hh:mm"
                showTimeSelect
                selected={endOn}
                onChange={changeDate("endOn")}
              />
            </FormGroup>
          </Col6>
          {/* Description */}
          <Col12>
            <FormGroup>
              <Label>Description</Label>
              <TextArea
                value={description}
                onChange={changeField("description")}
                rows={15}
              ></TextArea>
            </FormGroup>
          </Col12>
          {/* Update Button */}
          <FormFooter>
            <Button disabled={checkValidity()} onClick={submit} type="button">
              Update
            </Button>
          </FormFooter>
        </Form>
      </Container>
    </>
  );
};

export default PatientDetails;
