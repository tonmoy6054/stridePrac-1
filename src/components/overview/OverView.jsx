/* eslint-disable react/prop-types */

import { FiShoppingBag, FiActivity, FiTool, FiPackage } from 'react-icons/fi';


const Overview = ({ title, description, items }) => {
  
  const icons = {
    "Clothing section": <FiShoppingBag className="inline-block mr-2 text-indigo-500" />,
    "Sports": <FiActivity className="inline-block mr-2 text-indigo-500" />,
    "Automotive": <FiTool className="inline-block mr-2 text-indigo-500" />,
    "Misc": <FiPackage className="inline-block mr-2 text-indigo-500" />
  };

  return (
    <div className="p-6 border border-gray-300 rounded-lg max-w-xl mx-auto shadow-lg bg-white">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-indigo-600">{title}</h1>
      <p className="text-lg sm:text-xl mb-6 text-gray-700">{description}</p>
      <ul className="list-none p-0">
        {items.map((item, index) => (
          <li 
            key={index} 
            className="bg-indigo-100 p-3 mb-2 border border-indigo-200 rounded-md text-base sm:text-lg hover:bg-indigo-200 transition-colors flex items-center"
          >
            {icons[item]} {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  const overviewData = {
    title: "Overview of Our Services",
    description: "We offer a range of services to help you achieve the results you're after.",
    items: ["Clothing section", "Sports", "Automotive", "Misc"]
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Overview
        title={overviewData.title}
        description={overviewData.description}
        items={overviewData.items}
      />
    </div>
  );
};

export default App;

