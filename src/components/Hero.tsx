import React from 'react';
import { ArrowRight, Star, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-pink-50 to-rose-50 flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-pink-600/30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">5.0 Customer Rating</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="text-gray-900">Sweet Dreams,</span>
                <br />
                <span className="bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">
                  Sweeter Cakes
                </span>
              </h1>
            </div>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Handcrafted Fusion Cakes, Truffle Delights & Premium Brownies
            </p>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-xl shadow-lg inline-block">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-pink-600">FSSAI & MSME Registered</span> Baking Studio
                </p>
                <p className="text-sm text-gray-600">📍 Ambattur, Chennai</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <a
                  href="https://www.instagram.com/ayath_icakes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-600 hover:text-pink-600 transition-colors group"
                >
                  <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">Follow us on Instagram</span>
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/918248477869"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-full hover:from-pink-600 hover:to-pink-700 transition-all duration-300 transform hover:-translate-y-1 font-semibold text-lg shadow-xl flex items-center justify-center space-x-2 group"
              >
                <span>Order Now</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                to="/products"
                className="border-2 border-pink-500 text-pink-600 px-8 py-4 rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300 font-semibold text-lg text-center"
              >
                View Gallery
              </Link>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Beautiful layered cake"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/30 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 bg-white p-4 rounded-2xl shadow-xl animate-bounce">
              <div className="text-2xl">🎂</div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-xl animate-pulse">
              <div className="text-2xl">🧁</div>
            </div>
            <div className="absolute top-1/2 -right-8 bg-pink-500 text-white p-3 rounded-full shadow-xl">
              <Star className="h-6 w-6 fill-current" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;