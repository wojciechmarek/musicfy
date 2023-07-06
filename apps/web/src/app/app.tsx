import { Layout } from '@musicfy/web/views';
import { Analytics } from '@vercel/analytics/react';

export function App() {
  return (
    <>
      <Analytics />
      <Layout />
    </>
  );
}

export default App;
