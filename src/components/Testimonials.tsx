
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Emma Thompson",
    role: "CEO, TechStart Inc.",
    content: "This video call service transformed how our remote team collaborates. The video quality is exceptional, and the features like screen sharing and breakout rooms have made our meetings so much more productive.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
  },
  {
    name: "Michael Chen",
    role: "Professor, University of Technology",
    content: "I've tried numerous video platforms for my online lectures, but this one stands out. The recording feature and participant controls make teaching online almost as effective as in-person classes.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
  },
  {
    name: "Sarah Johnson",
    role: "Marketing Director, Brand Global",
    content: "The clarity of calls even with participants from different countries is remarkable. Our international team meetings have never been smoother, and the custom branding option adds a professional touch to client calls.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
  },
  {
    name: "David Wilson",
    role: "Small Business Owner",
    content: "For a small business like mine, finding affordable yet professional video call solutions was challenging until I found this service. The pricing is fair, and the quality exceeds expectations.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
  },
  {
    name: "Jessica Martinez",
    role: "HR Director, Enterprise Solutions",
    content: "We conduct hundreds of interviews monthly, and this platform has streamlined our remote hiring process. The reliability and security features give us peace of mind when handling confidential discussions.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-lg">
            Join over 1,500 satisfied customers who trust our video call services
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="border-0 shadow-md">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        <div className="mr-4">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                          <p className="text-gray-600">{testimonial.role}</p>
                          <div className="flex mt-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className="h-4 w-4 fill-yellow-400 text-yellow-400"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <blockquote className="text-gray-700 italic">
                        "{testimonial.content}"
                      </blockquote>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-50"
            aria-label="Previous testimonial"
          >
            <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-50"
            aria-label="Next testimonial"
          >
            <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex ? 'bg-theme-purple' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
