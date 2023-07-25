import { store } from '@musicfy/web/utility/store';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router } from '@musicfy/web/utility/routing';
import LogRocket from 'logrocket';

export function App() {
  LogRocket.init('a6lahl/musicfy');

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
