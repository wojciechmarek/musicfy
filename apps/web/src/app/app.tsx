import { Layout } from '@musicfy/web/views';
import { Analytics } from '@vercel/analytics/react';

export function App() {
  const isProduction = process.env.NODE_ENV === 'production';
  console.log('isProduction', isProduction);

  const api = process.env.API_URL;
  const key = process.env.API_KEY;
  console.log('api|key', api, key);
  
  return (
    <>
      <Analytics />
      <Layout />
    </>
  );
}

export default App;
