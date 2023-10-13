import Account from "./Account";

const Nav = () => {
  return (
    <nav className="container shadow-md flex justify-between items-center py-4 bg-white">
      <ul>
        <li>
          <a className="flex items-center gap-3" href="">
            <img className="w-10" src="./assets/image/logo-bg.png" alt="..." />
            <h3 className="font-bold text-xl hidden sm:block">
              Learn with sumit
            </h3>
          </a>
        </li>
      </ul>

      <Account />
    </nav>
  );
};

export default Nav;
