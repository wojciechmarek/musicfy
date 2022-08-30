import styles from './web-views.module.css';

/* eslint-disable-next-line */
export interface WebViewsProps {}

export function WebViews(props: WebViewsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to WebViews!</h1>
    </div>
  );
}

export default WebViews;
