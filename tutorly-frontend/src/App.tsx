import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/DefaultLayout";
import Explore from "./pages/explore/ExplorePage";
import BecomeProvider from "./pages/becomeaprovider/BecomeProvider";
import Dashboard from "./pages/dashboard/DashboardHome";
import LoginPage from "./pages/authpages/login/LoginPage";
import SignUpPage from "./pages/authpages/register-parent/SignUpPage";
import ProviderSignUpPage from "./pages/authpages/register-provider/ProviderSignUpPage";
import MyChildrenPage from "./pages/dashboard/my-children/MyChildrenPage";
import NewChildPage from "./pages/dashboard/my-children/new/NewChildPage";
import MyClassesPage from "./pages/dashboard/classes/ClassesPage";
import ClassPage from "./pages/dashboard/classes/[id]/ClassPage";
import CalendarPage from "./pages/calendar/CalendarPage";
import ServicesPage from "./pages/services/ServicesPage";
import NewServicePage from "./pages/services/new/NewServicePage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Shared layout for all routes */}
        <Route element={<Layout />}>
          <Route path="/" /> {/* Add the HomePage component */}
          <Route path="/explore" element={<Explore />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signup-provider" element={<ProviderSignUpPage />} />
          <Route path="/provider" element={<BecomeProvider />} />

          {/* Dashboard routes */}
          <Route path="/dashboard/*" />
          <Route path="/dashboard">
            <Route path="" element={<Dashboard />}/>

            <Route path="my-children">
              <Route path="" element={<MyChildrenPage />} />
              <Route path="new" element={<NewChildPage />} />
            </Route>

            <Route path="services">
              <Route path="" element={<ServicesPage />} />
              <Route path="new" element={<NewServicePage />} />
            </Route>

            <Route path="my-classes">
              <Route path="" element={<MyClassesPage />} />
              <Route path=":id" element={<ClassPage />} />
            </Route>
            <Route path="calendar" element={<CalendarPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>

  );
}

export default App;
