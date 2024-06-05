
const Banner = () => {
  return (
    <div className="bg-cover bg-center h-64 sm:h-80 md:h-96 lg:h-112 xl:h-128" style={{ backgroundImage: "url('https://source.unsplash.com/random/1600x900')" }}>
      <div className="flex items-center justify-center h-full bg-gray-900 bg-opacity-50">
        <div className="text-center text-white p-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Welcome to Our Website</h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl">Your will find all your daily necessaries here</p>
          <button className="mt-4 px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
