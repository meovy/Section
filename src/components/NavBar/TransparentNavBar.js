import {
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function TransparentNavBar({ tabs, notIcon }) {
  return (
    <Navbar className="navbar-transparent" expand="lg">
      <Container>
        <div className="row">
          <div className="col navbar-translate">
            <NavbarBrand href="#">Creative tim</NavbarBrand>
          </div>
          <div
            className={`col-6 display-flex ${
              notIcon ? "justify-content-end" : "justify-content-center"
            }`}>
            <Nav navbar>
              {tabs.map((tab) => (
                <NavItem key={tab}>
                  <NavLink href={`#${tab}`}>{tab}</NavLink>
                </NavItem>
              ))}
            </Nav>
          </div>
          {!notIcon && (
            <div className="col display-flex justify-content-end">
              <Nav navbar>
                <NavItem>
                  <NavLink href="#twitter">
                    <FontAwesomeIcon icon={faTwitter} />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#facebook">
                  <FontAwesomeIcon icon={faFacebook} />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#instagram">
                  <FontAwesomeIcon icon={faInstagram} />
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          )}
        </div>
      </Container>
    </Navbar>
  );
}
