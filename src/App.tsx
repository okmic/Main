import { Header } from './components/Header'
import { AppWrapper, Loading } from './index.styled'
import { Contacts } from './components/Contacts/Contacts'
import { Main } from './components/Main/Main';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { Resume } from './components/Resume/Resume';

function App() {
  return (
    <Suspense fallback={<Loading>Loading</Loading>}>
      <HashRouter >
        <AppWrapper>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Resume" element={<Resume />} />
          </Routes>
          <Contacts />
        </AppWrapper>
      </HashRouter>
    </Suspense>
  );
}

export default App
