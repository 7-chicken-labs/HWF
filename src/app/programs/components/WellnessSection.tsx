"use client"

import React from 'react';
import { Heart, Brain, Dumbbell, Salad, Users, Briefcase } from 'lucide-react';

// interface Card {
//   image: string;
//   title: string;
//   button: string;
// }

interface Program {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const WellnessSection: React.FC = () => {
//   const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  // const [hoveredProgram, setHoveredProgram] = useState<number | null>(null);

//   const cards: Card[] = [
//     {
//       image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop",
//       title: "Being healthy is becoming increasingly challenging day by day",
//       button: "Start with Wellness"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop",
//       title: "Personalized healthcare can be inaccessible and expensive",
//       button: "Think with Wellness"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=800&h=600&fit=crop",
//       title: "Everyone deserves the support they need to succeed",
//       button: "Grow with Wellness"
//     }
//   ];

  const programs: Program[] = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Personalised Wellness Journeys",
      description: "Custom plans integrating fitness, nutrition, and mindfulness- with coaching and teleconsultation support."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Mental & Emotional Wellness",
      description: "Mindfulness, counselling, peer support, and stress management workshops."
    },
    {
      icon: <Dumbbell className="w-8 h-8" />,
      title: "Fitness for Every Body",
      description: "Yoga, Pilates, dance classes, and accessible fitness challenges for all levels."
    },
    {
      icon: <Salad className="w-8 h-8" />,
      title: "Healthy Eating, Simplified",
      description: "Nutrition coaching, cooking classes, and public education on affordable, balanced diets."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Wellness",
      description: "Mobile health camps, local ambassador training, and neighbourhood health drives."
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Corporate Wellness",
      description: "Tailored wellness programs for workplaces- addressing physical, emotional, and nutritional health."
    }
  ];

  return (
    <section className="py-16 lg:py-24 text-black">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <h1 className="text-5xl md:text-6xl font-serif text-center mb-16 text-gray-900">
          Anytime Anywhere
        </h1> */}

        {/* Cards Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`bg-white rounded-3xl overflow-hidden shadow-lg transition-all duration-500 ${
                hoveredCard === index ? 'transform -translate-y-2 shadow-2xl' : ''
              }`}>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      hoveredCard === index ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-6">
                  <p className="text-gray-800 text-center mb-6 min-h-[60px] flex items-center justify-center">
                    {card.title}
                  </p>
                  <button className="w-full py-3 px-6 border-2 border-gray-800 rounded-full text-gray-800 font-medium hover:bg-gray-800 hover:text-white transition-all duration-300">
                    {card.button}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div> */}

        {/* Programs Section */}
        <div>
          <h2 className="brand-text text-black text-center audiowide text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-12">
            Our Group Coaching Programs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-md transition-all duration-300 border-2 border-amber-400`}
                // onMouseEnter={() => setHoveredProgram(index)}
                // onMouseLeave={() => setHoveredProgram(null)}
              >
                <div className={`inline-flex p-3 rounded-xl mb-4 transition-all duration-300 bg-amber-100 text-amber-600`}>
                  {program.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {program.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WellnessSection;