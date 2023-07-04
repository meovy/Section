import { faReadme } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "reactstrap";

export default function Action() {
  return (
    <div className="buttons">
      <Button
        className="btn-neutral mr-1"
        href="#readmore"
        color="info"
        size="lg">
        <FontAwesomeIcon icon={faReadme} /> Read More..
      </Button>
      <Button
        href="#subscribe"
        color="info"
        size="lg">
        <FontAwesomeIcon icon={faArrowUpFromBracket}/> Subscribe
      </Button>
    </div>
  );
}