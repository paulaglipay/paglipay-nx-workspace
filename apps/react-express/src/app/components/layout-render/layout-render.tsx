import styles from './layout-render.module.css';

/* eslint-disable-next-line */
export interface LayoutRenderProps {}

export function LayoutRender(props: LayoutRenderProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to LayoutRender!</h1>
    </div>
  );
}

export default LayoutRender;
