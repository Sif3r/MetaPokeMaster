import { Link, Outlet } from "react-router-dom";
import SearchBar from "./SearchBar";

function NavBar() {
  return (
    <>
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center"> {/* Container for the search bar */}
            <SearchBar />
          </div>
          <div className="flex items-center space-x-4"> {/* Container for the links */}
            <ul className="flex space-x-4">
              <li>
                <Link to="/team" className="text-white text-2xl font-semibold">
                  My team
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white text-2xl font-semibold">
                  Pokémon List
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default NavBar;
