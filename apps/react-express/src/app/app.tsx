import React, { useEffect, useState } from 'react';
import { Message } from '@create-nx-workspace/api-interfaces';
import ProductPurchaseCard from './product-purchase-card/product-purchase-card';
import AggrigateRating from './components/aggrigate-rating/aggrigate-rating';
import ProductCarousel from './components/product-crousel/product-crousel';
import ProductImages from './components/product-images/product-images';
import ProductReviewCard from './components/ProductReviewCard/ProductReviewCard'
import DLayout from './components/dlayout/dlayout';
import LayoutRender from './components/layout-render/layout-render';
import { Container } from 'react-bootstrap';
import Layout from './components/layout/layout';
import ThreeColumnCard from './components/three-column-card/three-column-card';
export const App = () => {
  const [m, setMessage] = useState<Message>({ message: '' });

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then(setMessage);
  }, []);

  return (
    <Container>
      <div style={{ textAlign: 'center' }}>
        <ProductReviewCard/>
        <h1>Welcome react-express</h1>
        <ThreeColumnCard/>
        {/* <Layout /> */}

        {/* <img
          width="450"
          src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png"
          alt="Nx - Smart, Fast and Extensible Build System"
        /> */}
      </div>
      <div>{m.message}</div>
    </Container>
  );
};

export default App;
