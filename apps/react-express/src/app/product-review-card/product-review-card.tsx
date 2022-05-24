import styles from './product-review-card.module.css';

import { AiFillStar } from "react-icons/ai";
import { Image } from "react-bootstrap";
/* eslint-disable-next-line */
export interface ProductReviewCardProps {}

export function ProductReviewCard(props: ProductReviewCardProps) {
  return (
<div style={{ textAlign: "left" }}>
      <span>
        <Image
          className="profile"
          src={profilePic != "" ? profilePic : "/man.jpg"}
          alt={profilePic != "" ? profilePic : "/man.jpg"}
        />
      </span>
      <span style={{ display: "inline-flex", verticalAlign: "middle" }}>
        <h5>{fullName}</h5>
      </span>
      <br />

      {Array.from(Array(5).keys()).map((c) => {
        return <AiFillStar key={c} style={{ color: "orange" }} />;
      })}
      <br />
      <h5>
        <strong>{title}</strong>
      </h5>
      <p style={{ fontSize: 12 }}>
        <br />
      </p>
      <p>{comment}</p>
    </div>
  );
}

export default ProductReviewCard;
