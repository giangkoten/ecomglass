import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div
        className="  text-white"
        style={{ height: "100vh", background: "#81c8c2", width: "250px" }}
      >
        <h1 className="text-3xl font-weight-bold pb-3">Glass Store</h1>
        <ul className="list-unstyled">
          <li className="px-4 py-2 h5">
            <Link to="/admin/user" className="text-white text-decoration-none">
              <i className="fa fa-user fa-fw me-3"></i>
              Users
            </Link>
          </li>
          <li className="px-4 py-2 h5">
            <Link
              to="/admin/products"
              className="text-white text-decoration-none"
            >
              <i className="fa-solid fa-glasses me-3"></i>
              Products
            </Link>
          </li>
          <li className="px-4 py-2 h5">
            <Link
              to="/admin/orders"
              className="text-white text-decoration-none"
            >
              <i className="fa-solid fa-cart-shopping me-3"></i>
              Orders
            </Link>
          </li>
          <li className="px-4 py-2 h5">
            <Link
              to="/admin/dashboard"
              className="text-white text-decoration-none"
            >
              <i className="fa-solid fa-table-columns me-3"></i>
              Dashboard
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
