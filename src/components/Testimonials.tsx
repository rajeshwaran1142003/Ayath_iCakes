import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Priya R.',
      location: 'Chennai',
      rating: 5,
      text: 'Ordered a fusion mango cake for my daughter\'s birthday - absolutely divine! The presentation was stunning and taste even better! The team at Ayath_iCakes exceeded all our expectations.',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Rajesh K.',
      location: 'Regular Customer',
      rating: 5,
      text: 'Best truffle cake in Ambattur! The quality and freshness is unmatched. Have been ordering from them for over a year now. Highly recommend Ayath_iCakes for any celebration!',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Sneha M.',
      location: 'Corporate Client',
      rating: 5,
      text: 'Professional service, on-time delivery, and the brownies were a hit at our office party. The attention to detail and customer service is exceptional. Will definitely order again!',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const stats = [
    { number: '1000+', label: 'Happy Customers' },
    { number: '5.0', label: 'Average Rating' },
    { number: '3+', label: 'Years Experience' },
    { number: '24/7', label: 'Order Support' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-medium">
            Customer Love
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            What Our Customers
            <span className="block text-pink-600">Say About Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our happy customers who have experienced 
            the magic of our cakes
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-3xl md:text-4xl font-bold text-pink-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative"
            >
              <div className="absolute top-4 right-4 text-pink-200">
                <Quote className="h-8 w-8" />
              </div>
              
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full opacity-10"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Join Our Happy Customers!
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Experience the joy of our premium cakes and become part of our growing family of 
              satisfied customers. Your celebration deserves the best!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/918248477869"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-full hover:from-pink-600 hover:to-pink-700 transition-all duration-300 font-semibold transform hover:-translate-y-1 shadow-lg"
              >
                Order Your Dream Cake
              </a>
              <a
                href="tel:8248477869"
                className="border-2 border-pink-500 text-pink-600 px-8 py-4 rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300 font-semibold"
              >
                Call Now: 8248477869
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;