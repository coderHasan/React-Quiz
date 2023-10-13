import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main>
        <div>{children}</div>
      </main>
    </>
  );
};

export default Layout;
