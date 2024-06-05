

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">About Us</h2>
          <p className="mt-4 text-lg text-gray-600">
            Here you find all the daily necessaries product you need to lead a better life and to make your life more easier, is our first priority!
          </p>
        </div>
        <div className="mt-10">
          <div className="max-w-xl mx-auto">
            <img className="rounded-lg shadow-lg" src="https://source.unsplash.com/random/800x400" alt="About Us" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
