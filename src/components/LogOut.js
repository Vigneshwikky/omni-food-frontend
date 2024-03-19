import "./Logout.css";
import { useNavigate } from "react-router-dom";

function LogOut() {
  const navigate = useNavigate();
  return (
    <button
      className="logOut-button"
      onClick={() => {
        navigate("/user-signin");
      }}
    >
      Log out
    </button>
  );
}
export default LogOut;
