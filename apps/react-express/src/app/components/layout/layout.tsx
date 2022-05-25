import CardPlaceholder from '../card-placeholder/card-placeholder';
import LayoutRender from '../layout-render/layout-render';
import styles from './layout.module.css';

/* eslint-disable-next-line */
export interface LayoutProps {
  jsonData: any[];
  sections: any[];
}
Layout.defaultProps = {
  jsonData: [
    {
      code: 'a',
      componentType: 'CardPlaceholderProps',
      props: {
        title: 'CardPlaceholderProps',
      },
    },
    
  ],
  sections: [
    {
      title: 'Section Title',
      fluid: true,
      cols: ['4', '4', '4', '4', '4', '4', '4'],
      featureTypesArry: ['a','a','a'],
    },
    {
      title: 'Section Title',
      fluid: false,
      cols: ['4', '4', '4', '4', '4', '4', '4'],
      featureTypesArry: ['a','a','a'],
    }
  ],
};
export function Layout(props: LayoutProps) {
  const components = {
    CardPlaceholder:<CardPlaceholder/>,
    // ProductReviewCard: require('./ProductReviewCard').default,
    // ProductPurchaseCard: require('./ProductPurchaseCard').default,
    // ProductImages: require('./ProductImages').default,
    // ReviewCrousel: require('./ReviewCrousel').default,
    // ProductCrousel: require('./ProductCrousel').default,
    // UserCard: require('./ui/components/Home/UserCard').default,
    // FeatureForm: require('./ui/components/Layout/FeatureForm').default,
    // ColsForm: require('./ui/components/Layout/ColsForm').default,
    // Forms: require('./ui/components/Layout/Forms').default,
    // Layout: require('./Layout').default,
  };

  return (
    <>
      {props.sections.map((e: any, i: any) => (
        <div key={`div-${i}`}>
          <section
            key={`prl-sec-${i}`}
            style={{
              backgroundColor: 'whitesmoke',
              padding: '25px',
              marginBottom: '25px',
            }}
          >
            <h1 key={`prl-sec-h1-${i}`}>{e.title}</h1>
          </section>
          <LayoutRender
            key={`prl-${i}`}
            components={components}
            // jsonData={props.jsonData}
            cols={e.cols}
            // featureTypesArry={e.featureTypesArry}
            fluid={e.fluid}
          />
        </div>
      ))}
    </>
  );
}

export default Layout;
