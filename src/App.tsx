import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./styles/global.scss";
import * as routes from "./lib/routes";
import { Layout } from './components/Layout'
import { NotFoundPage } from './pages/NotFoundPage';

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path={routes.mainPageRoute()} element={<><p>Home</p></>} />
              <Route path={routes.cartPageRoute()} element={<><p>Cart</p></>} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
