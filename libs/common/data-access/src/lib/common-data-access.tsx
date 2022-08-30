import styles from './common-data-access.module.css';

/* eslint-disable-next-line */
export interface CommonDataAccessProps {}

export function CommonDataAccess(props: CommonDataAccessProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CommonDataAccess!</h1>
    </div>
  );
}

export default CommonDataAccess;
