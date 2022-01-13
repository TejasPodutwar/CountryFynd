import React, { useState, useEffect } from "react";
import { Row, Container } from "react-bootstrap";
import axios from "axios";
import Country from "./Country";

const api_endpoint = "https://restcountries.com/v3.1/region/asia";

function CountryList(props) {
  const [countryListData, setCountryListData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(api_endpoint);
      setCountryListData(response.data);
    }
    fetchData();
  }, []);

  return (
    <Container className="my-3">
      <Row className="g-3">
        {countryListData
          .filter((country) => {
            if (props.searchCountry === "") {
              return country;
            } else if (
              country.name.common
                .toLowerCase()
                .includes(props.searchCountry.toLowerCase())
            ) {
              return country;
            }
          })
          .map((country, idx) => {
            return <Country country={country} key={idx} />;
          })}
      </Row>
    </Container>
  );
}

export default CountryList;
