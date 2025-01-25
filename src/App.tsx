
import { AppWrapper, Loading } from './index.styled'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Suspense, useEffect } from 'react'
import ScrollToTop from './ScrollToTop/ScrollToTop'
import Header from './components/AppBar/Header'
import Main from './components/Main/Main'
import NotFound from './components/NotFound/NotFound'
import Footer from './components/Footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { stateType } from './redux/store'
import { changeAppTheme } from './redux/appReducer'

type RoutesType = {
  path: string
  Component: React.NamedExoticComponent<object>
}

function App() {

  useEffect(() => {
    const handleAnchorClick = (event: any) => {
        const targetId = event.currentTarget.getAttribute('href')
        if (targetId.startsWith('#')) {
            event.preventDefault()
            const targetElement = document.querySelector(targetId)
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
        }
    }

    const anchorLinks = document.querySelectorAll('a[href^="#"]')

    anchorLinks.forEach((link) => {
        link.addEventListener('click', handleAnchorClick)
    })

    return () => {
        anchorLinks.forEach((link) => {
            link.removeEventListener('click', handleAnchorClick)
        })
    }

}, [])

  const routes = [
    { path: '/', Component: Main },
    { path: '/Main', Component: Main },
    { path: '/*', Component: NotFound },
  ] as Array<RoutesType>

  const theme = useSelector((state: stateType) => state.appReducer.theme)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(changeAppTheme())
  }, [theme, dispatch])

  return <Suspense fallback={
  <Loading>Loading</Loading>}>
    <BrowserRouter >
      <AppWrapper
        colorText={theme.styles.app.color}
        backgroundColor={theme.styles.app.background}>
        <ScrollToTop />
        <Header />
        <Routes>
          {routes.map(({ path, Component }, index) => <Route key={index} path={path} element={<Component />} />)}
        </Routes>
        <Footer />
      </AppWrapper>
    </BrowserRouter>
  </Suspense>
}

export default App