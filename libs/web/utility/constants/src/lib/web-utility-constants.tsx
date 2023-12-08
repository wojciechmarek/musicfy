import styles from './web-utility-constants.module.css';

/* eslint-disable-next-line */
export interface WebUtilityConstantsProps {}

export function WebUtilityConstants(props: WebUtilityConstantsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to WebUtilityConstants!</h1>
    </div>
  );
}

export default WebUtilityConstants;
