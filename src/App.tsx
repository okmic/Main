import { Header } from './components/AppBar/Header'
import { AppWrapper, Loading } from './index.styled'
import { Main } from './components/Main/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { Resume } from './components/Resume/Resume';
import { Projects } from './components/Projects/Projects';
import { Contacts } from './components/Contacts/Contacts';

function App() {
  return (
    <Suspense fallback={<Loading>Loading</Loading>}>
      <BrowserRouter >
        <AppWrapper>
          <Header />
          <Routes>
            <Route path="/My-Space" element={<Main />} />
            <Route path="/Resume" element={<Resume />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contact" element={<Contacts />} />
          </Routes>
        </AppWrapper>
      </BrowserRouter>
    </Suspense>
  );
}

export default App
