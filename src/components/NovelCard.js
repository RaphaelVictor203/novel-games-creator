import MediaQuery from 'react-responsive';
import Card from 'react-bootstrap/Card';

import './css/NovelCard.css';

function NovelCard(props) {
  return (
    <div>
      <MediaQuery maxWidth="690px">
        <Card id="novel-card-sm">
          <Card.Img id="novel-card-image-sm" variant="top" src={props.novelThumb} />
        </Card>
      </MediaQuery>

      <MediaQuery minWidth="700px">
        <Card id="novel-card-lg">
          <Card.Img id="novel-card-image-lg" variant="top" src={props.novelThumb} />
        </Card>
      </MediaQuery>
    </div>
  );
}

export default NovelCard;