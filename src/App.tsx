import { Header } from './components/AppBar/Header'
import { AppWrapper, Loading} from './index.styled'
import { Main } from './components/Main/Main'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Suspense, useEffect, useState } from 'react'
import { Resume } from './components/Resume/Resume'
import { Projects } from './components/Projects/Projects'
import { Contacts } from './components/Contacts/Contacts'
import ScrollToTop from './ScrollToTop/ScrollToTop'
import {NotFound} from './components/NotFound/NotFound'
import { DataEng, DataRu } from './data'
import { dataType } from './types'
import { Footer } from './components/Footer/Footer'

type LangType = "Eng" | "Ru" 

function App() {

  const [lang, setLang] = useState<LangType>("Eng")
  const [state, setState] = useState<dataType>(DataEng)
  const [theme, setTheme] = useState(false)

  
  useEffect(() => {
    if(lang === "Eng") {
        setState(DataEng)
    } else {
      setState(DataRu)
    }
  }, [lang])


  return (

    <Suspense fallback={<Loading>Loading</Loading>}>
      <BrowserRouter >
        <AppWrapper stateTheme={theme}>
        <ScrollToTop />
          <Header 
          state={state.header} 
          links={state.links} 
          lang={lang} 
          setLang={setLang}
          theme={theme}
          setTheme={setTheme}
          />
          <Routes>
            {/* for github */}
            <Route path="/Main" element={<Main state={state.main} links={state.links} theme={theme} />} />
            {/* for github */}
            <Route path="/" element={<Main state={state.main} links={state.links} theme={theme} />} />
            <Route path="/Curriculum-Vitae" element={<Resume cv={state.cv} />} />
            <Route path="/Projects" element={<Projects projects={state.projects} theme={theme} />} />
            <Route path="/Contact" element={<Contacts contacts={state.contacts} theme={theme}  />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          <Footer footer={state.footer} theme={theme} />
        </AppWrapper>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
