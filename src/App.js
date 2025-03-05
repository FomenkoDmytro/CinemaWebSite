import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

const Layout = lazy(() => import("./components/Layout/Layout"));
const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const Policy = lazy(() => import("./pages/Policy/Policy"));
const Login = lazy(() => import("./pages/Login/Login"));
const Registration = lazy(() => import("./pages/Registration/Registration"));
const ResetPassword = lazy(() => import("./pages/ResetPassword/ResetPassword"));
const PurchaseAndReturn = lazy(() =>
  import("./pages/PurchaseAndReturn/PurchaseAndReturn")
);
const FAQ = lazy(() => import("./pages/FAQ/FAQ"));
const Soon = lazy(() => import("./pages/Soon/Soon"));
const Movie = lazy(() => import("./pages/Movie/Movie"));

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/purchaseandreturn" element={<PurchaseAndReturn />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/soon" element={<Soon />} />
          <Route path="movie/:id" element={<Movie />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
