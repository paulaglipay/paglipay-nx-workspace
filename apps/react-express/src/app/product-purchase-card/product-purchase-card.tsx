import styles from './product-purchase-card.module.css';
import { Button } from "react-bootstrap";

/* eslint-disable-next-line */
export interface ProductPurchaseCardProps {
  title:string
}

ProductPurchaseCard.defaultProps = {
  title: "Default Title"
};

export function ProductPurchaseCard(props: ProductPurchaseCardProps) {
  return (
    <div style={{ textAlign: "left" }}>
      <span>
        <h1>$199.99</h1>
      </span>
      <span style={{ display: "inline-flex", verticalAlign: "middle" }}>
        <h5>Unknown</h5>
      </span>
      <br />

      <br />
      <Button>Add to Cart</Button>
      <br /><br />
      <Button>Buy Now</Button>
      <br /><br />
      <h5>
        <strong>{props.title}</strong>
      </h5>
      <p style={{ fontSize: 12 }}>
        Reviewed in the United States on April 29, 2021
        <br />
        Ships from DartCart
      </p>
      <p>Return Policy: Eligible for Return, Refund or Replacement</p>
      <p>Support: Free DartCart tech</p>
    </div>
  );
}

export default ProductPurchaseCard;
