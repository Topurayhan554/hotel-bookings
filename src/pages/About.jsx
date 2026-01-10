import React, { useState } from "react";
import {
  Award,
  Heart,
  Users,
  TrendingUp,
  Shield,
  Globe,
  Clock,
  MessageCircle,
} from "lucide-react";

const About = () => {
  const [activeTeam, setActiveTeam] = useState(0);

  const milestones = [
    { year: "2010", title: "Founded", desc: "Started with a vision" },
    { year: "2015", title: "Expansion", desc: "10+ locations" },
    { year: "2020", title: "Excellence", desc: "Award winning service" },
    { year: "2024", title: "Innovation", desc: "Digital transformation" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Guest First",
      desc: "Every decision we make puts our guests at the center",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Award,
      title: "Excellence",
      desc: "We strive for perfection in every detail",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Shield,
      title: "Trust & Safety",
      desc: "Your security and privacy are our top priorities",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Globe,
      title: "Sustainability",
      desc: "Building a better future for our planet",
      color: "from-purple-500 to-indigo-500",
    },
  ];

  const team = [
    {
      name: "Sarah Anderson",
      role: "Chief Executive Officer",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
      bio: "15+ years leading hospitality excellence",
    },
    {
      name: "Michael Chen",
      role: "Head of Operations",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
      bio: "Expert in luxury hotel management",
    },
    {
      name: "Emily Rodriguez",
      role: "Guest Experience Director",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
      bio: "Passionate about creating memorable stays",
    },
  ];

  const stats = [
    { icon: Users, number: "50K+", label: "Happy Guests" },
    { icon: Award, number: "25+", label: "Awards Won" },
    { icon: Globe, number: "15", label: "Locations" },
    { icon: TrendingUp, number: "98%", label: "Satisfaction Rate" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About Our Journey
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Redefining hospitality with passion, innovation, and care since
              2010
            </p>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-24">
            <path
              fill="#ffffff"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Our Story Section */}
        <div className="py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                What began as a small boutique hotel in 2010 has grown into a
                collection of luxury properties across the globe. Our founder's
                vision was simple yet profound: create spaces where every guest
                feels not just welcomed, but truly at home.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Today, we continue that legacy by blending timeless hospitality
                traditions with modern innovation, ensuring every stay is an
                unforgettable experience.
              </p>
              <div className="flex gap-4">
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Our Locations
                </button>
                <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80"
                alt="Hotel lobby"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-3">
                  <Clock className="w-10 h-10 text-blue-600" />
                  <div>
                    <div className="text-2xl font-bold text-gray-800">14</div>
                    <div className="text-sm text-gray-600">
                      Years of Service
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="py-16 bg-gradient-to-r from-blue-50 to-purple-50 -mx-4 px-4 rounded-3xl mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Our Journey
          </h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {milestone.year}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600">{milestone.desc}</p>
                </div>
                {idx < milestones.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-blue-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="py-16">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Our Core Values
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            The principles that guide everything we do
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${value.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 -mx-4 px-4 rounded-3xl my-16">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="py-16">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Meet Our Leadership
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            The passionate people behind your perfect stay
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div
                key={idx}
                onClick={() => setActiveTeam(idx)}
                className={`cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${
                  activeTeam === idx ? "ring-4 ring-blue-500 scale-105" : ""
                }`}
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center shadow-2xl">
            <MessageCircle className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied guests who've made us their home away
              from home
            </p>
            <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors shadow-xl hover:shadow-2xl transform hover:scale-105">
              Book Your Stay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
