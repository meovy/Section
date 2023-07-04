import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faGetPocket,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Buttons() {
  return (
    <div className="buttons">
      <Button
        className="btn-icon"
        color="transparent"
        href="#pablo"
        size="lg"
        onClick={(e) => e.preventDefault()}>
        <FontAwesomeIcon icon={faFacebookSquare} />
      </Button>
      <Button
        className="btn-icon"
        color="transparent"
        href="#pablo"
        size="lg"
        onClick={(e) => e.preventDefault()}>
        <FontAwesomeIcon icon={faTwitter} />
      </Button>
      <Button
        className="btn-icon"
        color="transparent"
        href="#pablo"
        size="lg"
        onClick={(e) => e.preventDefault()}>
        <FontAwesomeIcon icon={faGetPocket} />
      </Button>
      <Button
        className="mr-3"
        color="info"
        href="#pablo"
        size="lg"
        onClick={(e) => e.preventDefault()}>
        Read More
      </Button>
    </div>
  );
}
