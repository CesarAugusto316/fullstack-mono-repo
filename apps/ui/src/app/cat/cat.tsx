import styles from './cat.module.scss';

/* eslint-disable-next-line */
export interface CatProps {}

export function Cat(props: CatProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Cat!</h1>
    </div>
  );
}

export default Cat;
