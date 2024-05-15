import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MediaQuery from 'react-responsive';

import './css/GenreContainer.css'
import NovelCard from './NovelCard';
import NovelCardSlider from './NovelCardSlider';

function GenreContainer(props) {
  return (
    <div>
      <MediaQuery maxWidth="690px">
        <Container fluid="xg" id='genre-container-sm'>
          <Row>
            <Col>
                <p id='genre-title-sm'>{props.genreTitle}</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <NovelCardSlider />
            </Col>
          </Row>
        </Container>
      </MediaQuery>

      <MediaQuery minWidth="700px">
      <Container fluid="xg" id='genre-container-lg'>
        <Row>
          <Col>
              <p id='genre-title-lg'>{props.genreTitle}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <NovelCardSlider />
          </Col>
        </Row>
      </Container>
      </MediaQuery>
    </div>
  );
}

export default GenreContainer;
