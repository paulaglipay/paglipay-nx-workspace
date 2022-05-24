import styles from './aggrigate-rating.module.css';

/* eslint-disable-next-line */
export interface AggrigateRatingProps {}

export function AggrigateRating(props: AggrigateRatingProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AggrigateRating!</h1>
    </div>
  );
}

export default AggrigateRating;
