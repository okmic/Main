import { Header } from './components/AppBar/Header'
import { AppWrapper, Loading } from './index.styled'
import { Main } from './components/Main/Main'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Suspense } from 'react';
import { Resume } from './components/Resume/Resume';
import { Projects } from './components/Projects/Projects'
import { Contacts } from './components/Contacts/Contacts'
import ScrollToTop from './ScrollToTop/ScrollToTop'
import {NotFound} from './components/NotFound/NotFound';

function App() {
  return (
    <Suspense fallback={<Loading>Loading</Loading>}>
      <BrowserRouter >
        <AppWrapper>
        <ScrollToTop />
          <Header />
          <Routes>
            <Route path="/My-Space" element={<Main />} />
            <Route path="/Resume" element={<Resume />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contact" element={<Contacts />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </AppWrapper>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
