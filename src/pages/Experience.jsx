import React, { useState } from "react";
import { Star, Wifi, Coffee, Car, Dumbbell, Users } from "lucide-react";

const Experience = () => {
  const [activeExp, setActiveExp] = useState(0);

  const experiences = [
    {
      title: "Luxury Suite Experience",
      image:
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80",
      rating: 4.9,
      reviews: 328,
      price: 299,
      features: ["Ocean View", "King Bed", "Private Balcony", "Spa Access"],
    },
    {
      title: "Business Class Comfort",
      image:
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80",
      rating: 4.7,
      reviews: 256,
      price: 189,
      features: ["City View", "Work Desk", "High-Speed WiFi", "Meeting Room"],
    },
    {
      title: "Family Paradise",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
      rating: 4.8,
      reviews: 412,
      price: 249,
      features: ["2 Bedrooms", "Kids Pool", "Play Area", "Family Dining"],
    },
  ];

  const amenities = [
    { icon: Wifi, label: "Free WiFi" },
    { icon: Coffee, label: "Breakfast" },
    { icon: Car, label: "Parking" },
    { icon: Dumbbell, label: "Fitness" },
    { icon: Users, label: "Concierge" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Discover Your Perfect Stay
          </h1>
          <p className="text-xl text-gray-600">
            Unforgettable experiences crafted just for you
          </p>
        </div>

        {/* Main Experience Showcase */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-8">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative h-96 md:h-auto overflow-hidden">
              <img
                src={experiences[activeExp].image}
                alt={experiences[activeExp].title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg">
                <span className="text-2xl font-bold text-blue-600">
                  ${experiences[activeExp].price}
                </span>
                <span className="text-gray-600">/night</span>
              </div>
            </div>

            {/* Details Section */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {experiences[activeExp].title}
              </h2>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(experiences[activeExp].rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-700 font-semibold">
                  {experiences[activeExp].rating}
                </span>
                <span className="text-gray-500">
                  ({experiences[activeExp].reviews} reviews)
                </span>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">
                  Premium Features
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {experiences[activeExp].features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Book Now
              </button>
            </div>
          </div>
        </div>

        {/* Experience Selector */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              onClick={() => setActiveExp(idx)}
              className={`cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 ${
                activeExp === idx
                  ? "ring-4 ring-blue-500 shadow-2xl scale-105"
                  : "hover:shadow-xl hover:scale-102"
              }`}
            >
              <div className="relative h-48">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg">{exp.title}</h3>
                  <p className="text-sm">${exp.price}/night</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Amenities Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            World-Class Amenities
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {amenities.map((amenity, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center gap-3 p-6 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-lg transition-all duration-300 hover:scale-110"
              >
                <amenity.icon className="w-10 h-10 text-blue-600" />
                <span className="text-gray-700 font-medium text-center">
                  {amenity.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            { number: "500+", label: "Happy Guests" },
            { number: "4.8", label: "Average Rating" },
            { number: "50+", label: "Luxury Rooms" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
