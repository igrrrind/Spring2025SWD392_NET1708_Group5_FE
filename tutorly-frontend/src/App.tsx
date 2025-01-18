import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/DefaultLayout";
import Explore from "./pages/explore/ExplorePage";
import BecomeProvider from "./pages/becomeaprovider/BecomeProvider";
import Dashboard from "./pages/dashboard/DashboardHome";
import LoginPage from "./pages/authpages/login/LoginPage";
import SignUpPage from "./pages/authpages/register-parent/SignUpPage";
import ProviderSignUpPage from "./pages/authpages/register-provider/ProviderSignUpPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Shared layout for all routes */}
        <Route element={<Layout />}>
          <Route path="/" element />
          <Route path="/explore" element={<Explore />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signup-provider" element={<ProviderSignUpPage />} />
          <Route path="/provider" element={<BecomeProvider />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/*"/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
