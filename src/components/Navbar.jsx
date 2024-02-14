import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../context/context";

const Navbar = () => {
  const { searchParams, setSearchParams, handleSubmit } =
    useContext(GlobalContext);

  const handleInput = (e) => {
    setSearchParams(e.target.value);
  };

  console.log(searchParams);

  return (
    <nav className="px-5 flex justify-between items-center py-8  mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <NavLink to={"/"}>Food Recepie</NavLink>
      <form className="flex gap-3" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search here..."
          name="search"
          className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
          onChange={handleInput}
          value={searchParams}
        />
        <button type="submit">Search</button>
      </form>
      <ul className="flex flex-row gap-8">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/favourites"}>Favourite</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
