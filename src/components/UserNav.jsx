import { Link } from "react-router-dom";

const UserNav = () => {
  return (
    <div className="profile-nav flex justify-center gap-[20px]  ">
      <Link className="no-underline text-slate-500" to="/profile">
        Profile
      </Link>
      <Link className="no-underline" to="">
        Inbox
      </Link>
      <Link className="no-underline" to="/orders">
        Orders
      </Link>
      <Link className="no-underline" to="/favourites">
        Favourites
      </Link>
      <Link className="no-underline" to="">
        Settings
      </Link>
    </div>
  );
};

export default UserNav;
