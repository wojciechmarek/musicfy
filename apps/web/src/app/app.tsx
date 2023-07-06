import { Layout } from '@musicfy/web/views';
import { Analytics } from '@vercel/analytics/react';

export function App() {
  const isProduction = import.meta.env.VITE_NODE_ENV === 'production';
  console.log('isProduction', isProduction);

  const api = import.meta.env.VITE_API_URL;
  const key = import.meta.env.VITE_API_KEY;
  console.log('api|key', api, key);
  
  return (
    <>
      <Analytics />
      <Layout />
    </>
  );
}

export default App;
