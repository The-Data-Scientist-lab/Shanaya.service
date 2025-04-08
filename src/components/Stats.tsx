
import { useState, useEffect } from 'react';

const Stats = () => {
  const [animatedClients, setAnimatedClients] = useState(0);
  const [animatedRatings, setAnimatedRatings] = useState(0);
  const [animatedCountries, setAnimatedCountries] = useState(0);

  useEffect(() => {
    const animateValue = (
      current: number,
      target: number,
      setter: React.Dispatch<React.SetStateAction<number>>,
      duration: number = 1500
    ) => {
      const step = Math.max(1, Math.floor((target * 10) / duration));
      const interval = setInterval(() => {
        setter((prevValue) => {
          const nextValue = Math.min(prevValue + step, target);
          if (nextValue >= target) {
            clearInterval(interval);
            return target;
          }
          return nextValue;
        });
      }, 30);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateValue(0, 1500, setAnimatedClients);
          animateValue(0, 600, setAnimatedRatings);
          animateValue(0, 3, setAnimatedCountries);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const statsElement = document.querySelector('#stats');
    if (statsElement) {
      observer.observe(statsElement);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="stats" className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Premium Adult Entertainment
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-xl shadow-md p-8 transform transition-all hover:-translate-y-1 hover:shadow-lg">
            <div className="text-4xl md:text-5xl font-bold text-theme-purple mb-2">
              {animatedClients.toLocaleString()}+
            </div>
            <div className="text-gray-600 font-medium text-lg">Satisfied Clients</div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 transform transition-all hover:-translate-y-1 hover:shadow-lg">
            <div className="text-4xl md:text-5xl font-bold text-theme-purple mb-2">
              {animatedRatings.toLocaleString()}+
            </div>
            <div className="text-gray-600 font-medium text-lg">5-Star Reviews</div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 transform transition-all hover:-translate-y-1 hover:shadow-lg">
            <div className="text-4xl md:text-5xl font-bold text-theme-purple mb-2">
              {animatedCountries.toLocaleString()}
            </div>
            <div className="text-gray-600 font-medium text-lg">Countries Served</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
