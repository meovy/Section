import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Navbar,
  Nav,
  Container,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faScrewdriverWrench,
  faScroll,
} from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Navbar className="fixed-top nav-bar-section" color="white" expand="lg">
      <Container>
        <Nav navbar>
          <UncontrolledDropdown nav>
            <DropdownToggle
              caret
              color="default"
              nav
              onClick={(e) => e.preventDefault()}
              className="dropdown-btn">
              <FontAwesomeIcon icon={faScroll} className="mr-1" />{" "}
              <p className="text">Sections</p>
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem onClick={() => scrollToElement("headers")}>
                <FontAwesomeIcon icon={faBox} className="mr-1" />
                Headers
              </DropdownItem>
              <DropdownItem onClick={() => scrollToElement("features")}>
                <FontAwesomeIcon icon={faScrewdriverWrench} className="mr-1" />
                Features
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
