import styles from './dlayout.module.css';

/* eslint-disable-next-line */
export interface DLayoutProps {}

export function DLayout(props: DLayoutProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DLayout!</h1>
    </div>
  );
}

export default DLayout;
