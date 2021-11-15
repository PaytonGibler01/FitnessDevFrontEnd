import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Routines.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {createActivities, createRoutines} from "../api"
import { Form, Button } from "react-bootstrap";
import {Routines} from "./"
import { getUser } from "../api";


const CreateRoutines = ({allRoutines, setAllRoutines}) => {
  const [name, setName] = useState("");
  const [isPublic, setIsPublic] = useState("");
  const [goal, setGoal] = useState("");

  

  return (
    <>
      <Form
        id="CreateRoutines"
        onSubmit={async (event) => {
          event.preventDefault();
          try {
            const data = await createRoutines(name, goal, isPublic);
          console.log(name, goal, isPublic, "!!!!!!!!!!!!!")
          console.log(data)
          } catch (error) {
            console.error(error);
          }
        }}
      >
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Goal</Form.Label>
          <Form.Control
            type="goal"
            placeholder="goal"
            value={goal}
            onChange={(event) => {
              setGoal(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>isPublic</Form.Label>
          <Form.Control
            type="isPublic"
            placeholder="True or False"
            value={isPublic}
            onChange={(event) => {
              setIsPublic(event.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="isPublic" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};


export default CreateRoutines;

