import styles from './card-placeholder.module.css';
import { Card, Placeholder } from 'react-bootstrap';
import logo from '../../../assets/download.svg';
/* eslint-disable-next-line */
export interface CardPlaceholderProps {}

export function CardPlaceholder(props: CardPlaceholderProps) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={logo} />
      <Card.Body>
        <Placeholder as={Card.Title} animation="glow">
          <Placeholder xs={6} />
        </Placeholder>
        <Placeholder as={Card.Text} animation="glow">
          <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
          <Placeholder xs={6} /> <Placeholder xs={8} />
        </Placeholder>
        <Placeholder.Button variant="primary" xs={6} />
      </Card.Body>
    </Card>
  );
}

export default CardPlaceholder;
