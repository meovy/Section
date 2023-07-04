import {
  faFacebookSquare,
  faGooglePlus,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "reactstrap";

export default function Connect() {
  const icons = [
    <FontAwesomeIcon icon={faTwitter} />,
    <FontAwesomeIcon icon={faFacebookSquare} />,
    <FontAwesomeIcon icon={faGooglePlus} />,
    <FontAwesomeIcon icon={faInstagram} />,
  ];

  return (
    <>
      <h5>Connect with us on:</h5>
      <div className="buttons">
        {icons.map((icon) => (
          <Button
            key={icon}
            className="btn-icon btn-neutral btn-round mt-2 mr-1"
            color="danger"
            href="#twitter">
            {icon}
          </Button>
        ))}
      </div>
    </>
  );
}
