import React from "react";
import { Row, Col } from "react-bootstrap";
import classes from "./Country.module.css";

function Country(props) {
  const { country } = props;
  return (
    <Col lg={6}>
      <Row className={`${classes["country"]} mb-4 `}>
        <Col sm={5} className="px-0">
          <img
            src={country.flags.png}
            alt="country_img"
            className={`${classes["country-image"]} img-fluid h-100 w-100`}
          ></img>
        </Col>
        <Col sm={7} className="p-2">
          <h5 className={classes["purple"]}>{country.name.common}</h5>
          <div className="pb-1">
            <span className={`${classes["blue"]} fw-bold`}>Capital: </span>
            {country.capital}
          </div>
          <div className="pb-1">
            <span className={`${classes["blue"]} fw-bold`}>Region: </span>
            {country.region}
          </div>
          <div className="pb-1">
            <span className={`${classes["blue"]} fw-bold`}>Subregion: </span>
            {country.subregion}
          </div>

          <div className="pb-1">
            <span className={`${classes["blue"]} fw-bold`}>Population: </span>
            {country.population}
          </div>
          <div className="pb-1">
            <span className={`${classes["blue"]} fw-bold`}>Borders: </span>
            {country.borders ? country.borders.toString() : "None"}
          </div>
          <div className="pb-1">
            <span className={`${classes["blue"]} fw-bold`}>Languages: </span>
            {Object.values(country.languages).toString()}
          </div>
        </Col>
      </Row>
    </Col>
  );
}

export default Country;
