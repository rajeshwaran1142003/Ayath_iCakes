import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    cakeType: '',
    eventDate: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const services = [
    'Custom Cake Designs',
    'Home Delivery Available',
    'Bulk Orders Welcome',
    'Same Day Delivery (T&C Apply)',
    'Corporate Orders',
    'Wedding Cakes'
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-medium">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Ready to Make Your
            <span className="block text-pink-600">Celebration Sweeter?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let's create something amazing together! Contact us for custom orders, 
            bulk bookings, or any questions about our delicious offerings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Contact Information</h3>
              
              <div className="space-y-4">
                <a
                  href="tel:8248477869"
                  className="flex items-center space-x-4 p-4 bg-pink-50 rounded-2xl hover:bg-pink-100 transition-colors group"
                >
                  <div className="bg-pink-500 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-pink-600">Phone</h4>
                    <p className="text-pink-600 font-medium">8248477869</p>
                  </div>
                </a>

                <a
                  href="mailto:ayathicakes@gmail.com?subject=Cake%20Order%20Enquiry&body=Hi%20Ayath_iCakes%2C%0A%0AI%20would%20like%20to%20enquire%20about%3A%0A%0A-%20Type%20of%20cake%3A%0A-%20Occasion%3A%0A-%20Preferred%20delivery%20date%3A%0A-%20Any%20special%20requirements%3A%0A%0AThank%20you!"
                  className="flex items-center space-x-4 p-4 bg-pink-50 rounded-2xl hover:bg-pink-100 transition-colors group"
                >
                  <div className="bg-pink-500 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-pink-600">Email</h4>
                    <p className="text-pink-600 font-medium">ayathicakes@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center space-x-4 p-4 bg-pink-50 rounded-2xl">
                  <div className="bg-pink-500 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-600">Ambattur, Chennai - 600053</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-pink-50 rounded-2xl">
                  <div className="bg-pink-500 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Hours</h4>
                    <p className="text-gray-600">Mon-Sun: 9:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Our Services</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-pink-500" />
                    <span className="text-gray-600 text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Quick Actions</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.instagram.com/ayath_icakes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-colors font-medium group"
                >
                  <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span>Follow on Instagram</span>
                </a>
                <a
                  href="https://wa.me/918248477869?text=Hi%20Ayath_iCakes!%20I%20would%20like%20to%20enquire%20about%20ordering%20a%20cake.%20%F0%9F%8E%82"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors font-medium"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>WhatsApp Us</span>
                </a>
                <a
                  href="tel:8248477869"
                  className="flex items-center justify-center space-x-2 bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition-colors font-medium"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="bg-green-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h4>
                <p className="text-gray-600">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cake Type
                    </label>
                    <select
                      name="cakeType"
                      value={formData.cakeType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Select cake type</option>
                      <option value="fusion">Fusion Cake</option>
                      <option value="truffle">Truffle Cake</option>
                      <option value="brownies">Brownies</option>
                      <option value="custom">Custom Design</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Event Date
                    </label>
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Special Requirements
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your special requirements, flavor preferences, design ideas, etc."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-4 px-6 rounded-xl hover:from-pink-600 hover:to-pink-700 transition-all duration-300 font-semibold text-lg flex items-center justify-center space-x-2 transform hover:-translate-y-1 shadow-lg"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-gray-100 rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Find Us in Ambattur</h3>
            <p className="text-gray-600 mb-6">
              Located in the heart of Ambattur, Chennai. We serve the entire Chennai area 
              with home delivery available.
            </p>
            <div className="bg-pink-100 border-2 border-dashed border-pink-300 rounded-2xl p-12">
              <MapPin className="h-16 w-16 text-pink-500 mx-auto mb-4" />
              <p className="text-pink-600 font-medium">Interactive Map Coming Soon</p>
              <p className="text-gray-600 text-sm mt-2">
                Call us at <a href="tel:8248477869" className="text-pink-600 font-medium">8248477869</a> for 
                exact location and directions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;