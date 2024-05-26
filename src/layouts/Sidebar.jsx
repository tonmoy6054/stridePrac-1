import { Link } from 'react-router-dom';
import { FaHome, FaPlus, FaList, FaUserAlt } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="h-screen bg-gray-800 text-white flex flex-col justify-between p-4">
      <div>
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <ul>
          <li className="mb-2">
            <Link to="/" className="flex items-center p-2 hover:bg-gray-700 rounded">
              <FaHome className="mr-2" />
              Home
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/add-product" className="flex items-center p-2 hover:bg-gray-700 rounded">
              <FaPlus className="mr-2" />
              Add Product
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/all-categories" className="flex items-center p-2 hover:bg-gray-700 rounded">
              <FaList className="mr-2" />
              Categories
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/users" className="flex items-center p-2 hover:bg-gray-700 rounded">
              <FaUserAlt className="mr-2" />
              Users
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <Link to="/logout" className="flex items-center p-2 hover:bg-gray-700 rounded">
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
