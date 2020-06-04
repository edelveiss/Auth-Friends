import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateData } from "../actions";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 140,
  },
});

function UpdateForm(props) {
  const classes = useStyles();

  const inputChange = (e) => {
    const newEditData = {
      ...props.editState,
      [e.target.name]: e.target.value,
    };
    props.setEditState(newEditData);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    props.updateData(props.editState);
    props.toggle();
  };

  const formCancel = (e) => {
    e.preventDefault();
    props.toggle();
  };
  return (
    <Card>
      <form onSubmit={formSubmit}>
        <h2>
          {" "}
          <input
            id="name"
            type="text"
            name="name"
            onChange={inputChange}
            defaultValue={props.friend.name}
          />
        </h2>
        <p>
          age:{" "}
          <input
            id="age"
            type="text"
            name="age"
            onChange={inputChange}
            defaultValue={props.friend.age}
          />
        </p>
        <p>
          <input
            id="email"
            type="email"
            name="email"
            onChange={inputChange}
            defaultValue={props.friend.email}
          />
        </p>

        <CardActions style={{ marginLeft: "25%" }}>
          <Button
            type="submit"
            className="card-button"
            size="small"
            color="primary"
          >
            Submit
          </Button>
          <Button
            className="card-button"
            size="small"
            color="primary"
            onClick={formCancel}
          >
            Cancel
          </Button>
        </CardActions>
      </form>
    </Card>
  );
}
//export default UpdateForm;
export default connect(null, { updateData })(UpdateForm);
