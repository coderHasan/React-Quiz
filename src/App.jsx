import Layout from "./component/Layout";
// import Home from "./component/pages/Home";
import Signup from "./component/pages/Signup";

const App = () => {
  return (
    <div className="">
      <Layout>
        {/* <Home /> */}
        <Signup />
      </Layout>
    </div>
  );
};

export default App;
