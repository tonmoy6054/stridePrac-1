
const testimonials = [
  {
    name: 'John Doe',
    role: 'CEO, ExampleCorp',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpMHHzRF_v4aniW2pT141J9hZumhWn5TN_sq8e0D2sLg&s',
    text: 'This service is fantastic! It has greatly improved our workflow and efficiency.'
  },
  {
    name: 'Jane Smith',
    role: 'CTO, Tech Innovators',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRejpS03myZU3z7_MB5FMW3duQO3idmQcmSULmTeSCdCg&s',
    text: 'Amazing results! We couldn’t be happier with the quality and support provided.'
  },
  {
    name: 'Emily Johnson',
    role: 'Manager, Business Solutions',
    image: 'https://w7.pngwing.com/pngs/15/806/png-transparent-male-youtube-knight-dental-care-single-person-dentist-youtube-business-dating-smile-man-thumbnail.png',
    text: 'A game changer for our business. The customer service is top-notch.'
  }
];

const Testimonial = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">What our clients say</p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 gap-x-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
                <img className="w-24 h-24 rounded-full mb-4" src={testimonial.image} alt={testimonial.name} />
                <h3 className="text-lg font-medium text-gray-900">{testimonial.name}</h3>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
                <p className="mt-4 text-base text-gray-700">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
