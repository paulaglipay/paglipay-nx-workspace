import styles from './layout-render.module.css';
import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import DLayout from '../dlayout/dlayout';

import CardPlaceholder from '../card-placeholder/card-placeholder';
/* eslint-disable-next-line */
export interface LayoutRenderProps {
  fluid: boolean;
  features: any[];
  cols: string[];
  components:any;
}

LayoutRender.defaultProps = {
  fluid: true,
  cols: ['4', '4', '4'],
  features: [
    <CardPlaceholder/>,
    <CardPlaceholder/>,
    <CardPlaceholder/>
  ],
  components:{
    CardPlaceholder:<CardPlaceholder/>,
  }
};

export function LayoutRender(props: LayoutRenderProps) {
  // const res = props.jsonData.reduce(
  //   (acc: any, curr: any, i: any) => (
  //     (acc[curr.code] = React.createElement(
  //       props.components[props.jsonData[i].componentType],
  //       props.jsonData[i].props
  //     )),
  //     acc
  //   ),
  //   {}
  // );

  return (
    <Container
      fluid={props.fluid}
      // style={{ backgroundColor: 'white', padding: '25px', marginBottom: '25px' }}
    >
      <DLayout cols={props.cols} features={props.features} />
    </Container>
  );
}

export default LayoutRender;
