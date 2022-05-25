import styles from './dlayout.module.css';
import { Col, Row, Container, Image, Card } from 'react-bootstrap';

/* eslint-disable-next-line */
export interface DLayoutProps {
  cols: string[];
  features: any[];
}

DLayout.defaultProps = {
  cols: ['4','4','4'],
  features: [
    <div>
      <h1>{'hi'}</h1>
    </div>,
    <div>
      <h1>{'hi2'}</h1>
    </div>,
    <div>
      <h1>{'hi3'}</h1>
    </div>,
  ],
};

export function DLayout(props: DLayoutProps) {
  return (
    <Row>
      {props.cols.map((e: any, i: any) => {
        if (e === 'z') {
          e = 12;
        } else if (e === '0') {
          e = 10;
        }
        return (
          <Col
            style={{ transition: '350ms', paddingBottom: '25px' }}
            key={`${i}`}
            lg={e}
          >
            {props.features[i]}
          </Col>
        );
      })}
    </Row>
  );
}

export default DLayout;
