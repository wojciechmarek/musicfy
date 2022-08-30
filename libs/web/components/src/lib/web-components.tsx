import styles from './web-components.module.css';

/* eslint-disable-next-line */
export interface WebComponentsProps {}

export function WebComponents(props: WebComponentsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to WebComponents!</h1>
    </div>
  );
}

export default WebComponents;
