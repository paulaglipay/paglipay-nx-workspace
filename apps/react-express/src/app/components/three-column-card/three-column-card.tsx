import Layout from '../layout/layout';
import styles from './three-column-card.module.css';

/* eslint-disable-next-line */
export interface ThreeColumnCardProps {}

export function ThreeColumnCard(props: ThreeColumnCardProps) {
  return (
    <Layout
      jsonData={[
        {
          code: 'a',
          componentType: 'CardPlaceholder',
          props: {
            title: 'CardPlaceholderProps',
          },
        },
        {
          code: '5',
          componentType: 'ProductReviewCard',
          props: {
            title: 'I Love It! Five Stars',
            rating: 5,
          },
        },
      ]}
      sections={[
        {
          title: 'Section Title',
          fluid: true,
          cols: ['4', '4', '4', '4', '4', '4'],
          featureTypesArry: ['a', 'a'],
        },
        {
          title: 'Section Title',
          fluid: false,
          cols: ['4', '4', '4', '4', '4', '4'],
          featureTypesArry: ['a'],
        },
      ]}
    />
  );
}

export default ThreeColumnCard;
