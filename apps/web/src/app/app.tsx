import { store } from '@musicfy/web/utility/store';
import { Analytics } from '@vercel/analytics/react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router } from '@musicfy/web/utility/routing';

export function App() {
  return (
    <>
      <Analytics />
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
