import React, { useState } from 'react';
import { ShoppingCart, Heart, Star } from 'lucide-react';

const ProductGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'fusion', name: 'Fusion Cakes' },
    { id: 'truffle', name: 'Truffle Cakes' },
    { id: 'brownies', name: 'Brownies' }
  ];

  const products = [
    {
      id: 1,
      name: 'Mango Cheesecake Fusion',
      category: 'fusion',
      price: '₹899',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Tropical mango blended with creamy cheesecake layers',
      popular: true
    },
    {
      id: 2,
      name: 'Red Velvet Rose',
      category: 'fusion',
      price: '₹799',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Classic red velvet with rose-infused cream cheese frosting'
    },
    {
      id: 3,
      name: 'Dark Chocolate Truffle',
      category: 'truffle',
      price: '₹1299',
      rating: 5.0,
      image: 'https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Rich Belgian dark chocolate with silky truffle layers',
      popular: true
    },
    {
      id: 4,
      name: 'White Chocolate Raspberry',
      category: 'truffle',
      price: '₹1399',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Delicate white chocolate with fresh raspberry compote'
    },
    {
      id: 5,
      name: 'Classic Fudge Brownies',
      category: 'brownies',
      price: '₹299',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Decadent fudgy brownies with premium cocoa'
    },
    {
      id: 6,
      name: 'Walnut Crunch Brownies',
      category: 'brownies',
      price: '₹349',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/2531546/pexels-photo-2531546.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Rich brownies loaded with crunchy walnuts'
    },
    {
      id: 7,
      name: 'Chocolate Orange Fusion',
      category: 'fusion',
      price: '₹849',
      rating: 4.6,
      image: 'https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Chocolate sponge with zesty orange cream filling'
    },
    {
      id: 8,
      name: 'Caramel Truffle Delight',
      category: 'truffle',
      price: '₹1199',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Smooth caramel truffle with salted caramel drizzle'
    },
    {
      id: 9,
      name: 'Salted Caramel Brownies',
      category: 'brownies',
      price: '₹379',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Gooey brownies with salted caramel swirls',
      popular: true
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-medium">
            Our Products
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Delicious
            <span className="block text-pink-600">Creations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every cake tells a story, every bite creates a memory. Explore our carefully 
            crafted collection of premium desserts.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-pink-600 text-white shadow-lg transform -translate-y-1'
                  : 'bg-white text-gray-600 hover:bg-pink-50 hover:text-pink-600 shadow-md'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {product.popular && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Popular
                  </div>
                )}
                <button className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300 group opacity-0 group-hover:opacity-100">
                  <Heart className="h-5 w-5 text-pink-600" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-pink-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-600">{product.rating}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {product.description}
                </p>

                <div className="flex items-center justify-between pt-4">
                  <div className="text-2xl font-bold text-pink-600">
                    {product.price}
                  </div>
                  <button className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-3 rounded-full hover:from-pink-600 hover:to-pink-700 transition-all duration-300 font-medium flex items-center space-x-2 transform hover:-translate-y-1 shadow-lg">
                    <ShoppingCart className="h-4 w-4" />
                    <span>Order Now</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Order CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Don't see what you're looking for?
            </h3>
            <p className="text-pink-100 mb-8 max-w-2xl mx-auto text-lg">
              We specialize in custom cakes for all occasions! Tell us your vision and 
              we'll create something magical just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/918248477869"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-pink-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold transform hover:-translate-y-1 shadow-lg"
              >
                Custom Order on WhatsApp
              </a>
              <a
                href="tel:8248477869"
                className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-pink-600 transition-all duration-300 font-semibold"
              >
                Call for Custom Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;