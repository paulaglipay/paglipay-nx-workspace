import styles from './product-review-card.module.css';
import logo from '../../assets/man.jpg';
import { AiFillStar } from 'react-icons/ai';
import { Image } from 'react-bootstrap';
/* eslint-disable-next-line */
export interface ProductReviewCardProps {
  profilePic: string;
  fullName: string;
  title: string;
  comment: string;
}
ProductReviewCard.defaultProps = {
  profilePic: '',
  fullName: 'Default Title',
  title: 'Default Title',
  comment: 'Default Title',
};
export function ProductReviewCard(props: ProductReviewCardProps) {
  return (
    <div style={{ textAlign: 'left' }}>
      <span>
        <Image
          className="profile"
          src={props.profilePic != '' ? props.profilePic : logo}
          alt={props.profilePic != '' ? props.profilePic : logo}
        />
      </span>
      <span style={{ display: 'inline-flex', verticalAlign: 'middle' }}>
        <h5>{props.fullName}</h5>
      </span>
      <br />

      {Array.from(Array(5).keys()).map((c) => {
        return <AiFillStar key={c} style={{ color: 'orange' }} />;
      })}
      <br />
      <h5>
        <strong>{props.title}</strong>
      </h5>
      <p style={{ fontSize: 12 }}>
        <br />
      </p>
      <p>{props.comment}</p>
    </div>
  );
}

export default ProductReviewCard;
