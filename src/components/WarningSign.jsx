import React, { Component } from "react";
import { Alert } from "react-bootstrap";

function WarningSign(props) {
  return <Alert variant={props.variant}>{props.text}</Alert>;
}

export default WarningSign;
