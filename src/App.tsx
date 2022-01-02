import { Header } from './components/Header'
import { AppWrapper, Loading } from './index.styled'
import { Contacts } from './components/Contacts'
import { Home } from './components/Home';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { Resume } from './components/Resume';

function App() {
  return (
    <Suspense fallback={<Loading>Loading</Loading>}>
      <HashRouter >
        <AppWrapper>
          <Header />
          <Routes>
            <Route path="/" element={<Resume />} />
          </Routes>
          <Contacts />
        </AppWrapper>
      </HashRouter>
    </Suspense>
  );
}

export default App
