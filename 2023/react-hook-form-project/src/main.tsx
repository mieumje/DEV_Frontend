import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import 'react-datepicker/dist/react-datepicker.css'; // react-datepicker
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { createTheme, ThemeProvider } from '@mui/material';
import { koKR } from '@mui/x-date-pickers/locales/koKR';
import 'dayjs/locale/ko';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Test from '@pages/test';
import DescriptionPage from '@pages/description';
import locale from 'antd/lib/locale/ko_KR';
import { ConfigProvider, Layout } from 'antd';
import BannerDescriptionPage from '@pages/banner';

const theme = createTheme(
  {
    palette: {
      primary: { main: '#59b2e7' },
    },
  },
  koKR
);

const antdTheme = {
  token: {
    colorPrimary: '#59b2e7',
  },
  components: {
    Button: {
      colorPrimary: '#59b2e7',
    },
  },
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
        <ConfigProvider locale={locale} theme={antdTheme}>
          <Layout className="layout">
            <Layout.Header
              style={{
                backgroundColor: '#fff',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <span>this is header</span>
              <div>
                <span>item 1</span>
                <span>item 2</span>
                <span>item 3</span>
              </div>
            </Layout.Header>
            <Layout.Content style={{ padding: '0 2rem' }}>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<App />} />
                  <Route path="/test" element={<Test />} />
                  <Route path="/description" element={<DescriptionPage />} />
                  <Route
                    path="/banner-description"
                    element={<BannerDescriptionPage />}
                  />
                </Routes>
              </BrowserRouter>
            </Layout.Content>
            <Layout.Footer style={{ textAlign: 'center' }}>
              <span>this is footer</span>
            </Layout.Footer>
          </Layout>
        </ConfigProvider>
      </LocalizationProvider>
    </ThemeProvider>
  </React.StrictMode>
);
