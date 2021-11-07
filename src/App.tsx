import { ConfigProvider } from 'antd';
import locale from "antd/lib/locale/vi_VN";
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react';
import './App.css';
import { AppRouter } from './routers';
import ScrollToTop from './routers/ScrollToTop';
import { persistor, store } from "./ultils/store";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConfigProvider locale={locale}>
          <BrowserRouter>
            <ScrollToTop>
              <AppRouter />
            </ScrollToTop>
          </BrowserRouter>
        </ConfigProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
