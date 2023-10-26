import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { ButtonLink } from "./ui/ButtonLink";
import { useNavigate } from "react-router-dom";

export function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
      <h1 className="text-2xl font-bold">
        <Link to={isAuthenticated ? "/characters/character" : "/"}>Create your character</Link>
      </h1>
      <ul className="flex gap-x-2">
        {isAuthenticated ? (
          <>
            <li>
              Welcome {user.username}
            </li>
            <li>
              <ButtonLink to="/characters/character">Create</ButtonLink>
            </li>
            <li>
              <ButtonLink to="/characters">Characters</ButtonLink>
            </li>
            <li>
              <Link to="/" onClick={() => logout()}>
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <ButtonLink to="/login">Login</ButtonLink>
            </li>
            <li>
              <ButtonLink to="/register">Register</ButtonLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}