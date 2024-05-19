import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import RouteLayout from "./layout/RouteLayout";
import HelpLaout from "./layout/HelpLaout";
import Faq from "./pages/help/Faq";
import Contact from "./pages/help/Contact";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RouteLayout/>}>
      <Route index element={<Home/>} />
      <Route path="about" element={<About/>} />
      <Route path="help" element={<HelpLaout/>}>
      <Route path="faq" element={<Faq/>}/>
      <Route path="contact" element={<Contact/>}/>
      </Route>
    </Route>
  )
)
function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App
