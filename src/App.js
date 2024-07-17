import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import ElementsList from './features/elements/ElementsList';

function App() {
  return (
    <Provider store={store}>
      <div className="h-full w-full">
        <ElementsList />
      </div>
    </Provider>
  );
}

export default App;
