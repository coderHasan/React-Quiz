import Layout from "./component/Layout";
import Login from "./component/pages/Login";
// import Home from "./component/pages/Home";
// import Signup from "./component/pages/Signup";
const App = () => {
  return (
    <div className="">
      <Layout>
        {/* <Home /> */}
        {/* <Signup /> */}
        <Login />
      </Layout>
    </div>
  );
};

export default App;
