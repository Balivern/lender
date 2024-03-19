import React from "react";
import { Row, Col } from "react-bootstrap";
import SearchBar from "./searchBar";
import UserCard from "./userCard";

export default function Header() {
  return (
    <Row className="header">
      <Col xs="2" md="2" lg="2">
        <img
          src={process.env.PUBLIC_URL + "logo192.png"}
          alt="Logo Lender"
        ></img>
      </Col>
      <Col id="SearchBarCol" xs md lg>
        <SearchBar />
      </Col>
      <Col xs="3" md="3" lg="3">
        <UserCard />
      </Col>
    </Row>
  );
}
