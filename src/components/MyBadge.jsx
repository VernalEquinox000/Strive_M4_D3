import React, { Component } from "react";
import { Badge } from "react-bootstrap";

function MyBadge(props) {
  return <Badge variant={props.variant}>{props.text}</Badge>;
}

export default MyBadge;
