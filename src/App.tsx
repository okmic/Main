
import { AppWrapper, Loading} from './index.styled'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Suspense, useEffect } from 'react'
import ScrollToTop from './ScrollToTop/ScrollToTop'
//components
import Header  from './components/AppBar/Header'
import Main  from './components/Main/Main'
import Resume from './components/Resume/Resume'
import Projects from './components/Projects/Projects'
import Contacts from './components/Contacts/Contacts'
import NotFound from './components/NotFound/NotFound'
import Footer from './components/Footer/Footer'
import Browser from './components/Browser/Browser'

import { useDispatch, useSelector } from 'react-redux'
import { stateType } from './redux/store'
import { changeAppTheme } from './redux/appReducer'

type RoutesType = {
  path: string
  Component: React.NamedExoticComponent<object>
}

function App() {

  const routes = [
    {path: '/', Component: Main} ,
    {path: '/Main', Component: Main},
    {path: '/Curriculum-Vitae', Component: Resume},
    {path: '/Projects', Component: Projects},
    {path: '/Contact', Component: Contacts},
    {path: '/Browser', Component: Browser},
    {path: '/*', Component: NotFound},
  ] as Array<RoutesType>

  const theme = useSelector((state: stateType) => state.appReducer.theme)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(changeAppTheme())
  }, [theme, dispatch])

  return <Suspense fallback={<Loading>Loading</Loading>}>
      <BrowserRouter >
        <AppWrapper 
        colorText={theme.styles.app.color}
        backgroundColor={theme.styles.app.background}>
        <ScrollToTop />
          <Header />
          <Routes>
                {routes.map(({path, Component}, index) => <Route key={index} path={path} element={<Component />} />)}
          </Routes>
          <Footer />
        </AppWrapper>
      </BrowserRouter>
    </Suspense>
}

export default App

/*             
<Route path="/Main" element={<Main />} />
<Route path="/" element={<Main />} />
<Route path="/Curriculum-Vitae" element={<Resume />} />
<Route path="/Projects" element={<Projects />} />
<Route path="/Contact" element={<Contacts />} />
<Route path="/Browser" element={<Browser />} />
<Route path="/*" element={<NotFound />} /> */