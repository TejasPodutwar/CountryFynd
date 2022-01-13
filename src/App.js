import "bootstrap/dist/css/bootstrap.min.css";
import { Fragment, useState } from "react";
import { Container, InputGroup, FormControl } from "react-bootstrap";
import "./App.css";
import CountryList from "./components/CountryList";
import Header from "./components/Header";
import { FaSearch } from "react-icons/fa";
function App() {
  const [searchTeam, setSearchTeam] = useState("");
  return (
    <Fragment>
      <Header />
      <Container>
        <InputGroup className="mb-5 mt-3 w-md-50 w-100">
          <InputGroup.Text>
            <FaSearch />
          </InputGroup.Text>
          <FormControl
            aria-label="First name"
            onChange={(e) => {
              setSearchTeam(e.target.value);
            }}
          />
        </InputGroup>
      </Container>

      <CountryList searchCountry={searchTeam} />
    </Fragment>
  );
}

export default App;
