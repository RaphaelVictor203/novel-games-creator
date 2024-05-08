import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './css/NovelCard.css';

function NovelCard(props) {
  return (
    <Card id='novel-card'>
      <Card.Img id="novel-card-image" variant="top" src={props.novelThumb} />
    </Card>
  );
}

export default NovelCard;