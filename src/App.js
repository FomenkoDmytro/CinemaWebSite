import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { ToastContainer } from "react-toastify"; // Импортируем ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Импортируем стили для тостов

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
const MovieRepository = lazy(() =>
  import("./pages/MovieRepository/MovieRepository")
);
const AddMovie = lazy(() => import("./pages/AddMovie/AddMovie"));
const Dictionaries = lazy(() => import("./pages/Dictionaries/Dicrtionaries"));

function App() {
  return (
    <div>
      {/* Глобальный контейнер для тостов */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
      />
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
          <Route path="/movierepository" element={<MovieRepository />} />
          <Route path="/addnewmovie" element={<AddMovie />} />
          <Route path="/dictionaries" element={<Dictionaries />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
