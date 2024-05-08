import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './css/GenreContainer.css'
import NovelCard from './NovelCard';
import NovelCardSlider from './NovelCardSlider';

function GenreContainer(props) {
  return (
    <Container fluid="xg" id='genre-container'>
      <Row>
        <Col>
            <p id='genre-title'>{props.genreTitle}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <NovelCardSlider />
        </Col>
      </Row>
    </Container>
  );
}

export default GenreContainer;
