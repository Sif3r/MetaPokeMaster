import { Link, Outlet } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-white text-2xl font-semibold">
            Pokémon List
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link to="/team" className="text-white hover:underline">
                My team
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default NavBar
