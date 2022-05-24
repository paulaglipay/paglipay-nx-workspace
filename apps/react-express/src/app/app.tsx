import React, { useEffect, useState } from 'react';
import { Message } from '@create-nx-workspace/api-interfaces';
import ProductPurchaseCard from './product-purchase-card/product-purchase-card';
import AggrigateRating from './components/aggrigate-rating/aggrigate-rating';
import ProductReviewCard from './product-review-card/product-review-card';
import DLayout from './components/dlayout/dlayout';
import { Container } from 'react-bootstrap';
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
        <h1>Welcome react-express</h1>

        <DLayout
          features={[
            <ProductReviewCard />,
            <ProductPurchaseCard />,
            <AggrigateRating />,
          ]}
          cols={['4', '4', '4']}
        />
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
