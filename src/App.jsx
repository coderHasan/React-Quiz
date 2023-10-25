import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./component/Layout";
import Home from "./component/pages/Home";
import Login from "./component/pages/Login";
import Quiz from "./component/pages/Quiz";
import Result from "./component/pages/Result";
import Signup from "./component/pages/Signup";
import { AuthProvider } from "./contexts/AuthContext";

const App = () => {
  return (
    <div className="">
      <Router>
        <AuthProvider>
          <Layout>
            <Routes>
              <Route exact path="/" Component={Home} />
              <Route exact path="/signup" Component={Signup} />
              <Route exact path="/login" Component={Login} />
              <Route exact path="/quiz" Component={Quiz} />
              <Route exact path="/result" Component={Result} />
            </Routes>
          </Layout>
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;
