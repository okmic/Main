import { Header } from './components/AppBar/Header'
import { AppWrapper, Loading } from './index.styled'
import { Main } from './components/Main/Main'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Suspense, useEffect, useState } from 'react';
import { Resume } from './components/Resume/Resume';
import { Projects } from './components/Projects/Projects'
import { Contacts } from './components/Contacts/Contacts'
import ScrollToTop from './ScrollToTop/ScrollToTop'
import {NotFound} from './components/NotFound/NotFound'
import { DataEng, DataRu } from './data';
import { dataType } from './types';


function App() {

  const [lang, setLang] = useState(true)
  const [state, setState] = useState<dataType>(DataEng)

  useEffect(() => {
    if(lang) {
        setState(DataEng)
    } else {
      setState(DataRu)
    }
  }, [lang])

  const handleChangedLang = () => {
    setLang((prev) => !prev)  
  }

  return (
    <Suspense fallback={<Loading>Loading</Loading>}>
      <BrowserRouter >
        <AppWrapper>
        <ScrollToTop />
          <Header state={state.header} links={state.links} />
          <button onClick={handleChangedLang}></button>
          <Routes>
            <Route path="/Main" element={<Main state={state.main} links={state.links} footer={state.footer} />} />
            <Route path="/Curriculum-Vitae" element={<Resume footer={state.footer} cv={state.cv} />} />
            <Route path="/Projects" element={<Projects footer={state.footer} projects={state.projects} />} />
            <Route path="/Contact" element={<Contacts contacts={state.contacts} />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </AppWrapper>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
