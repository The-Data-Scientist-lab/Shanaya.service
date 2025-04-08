
import { Badge } from "@/components/ui/badge";

const Features = () => {
  const features = [
    {
      title: "Private Video Sessions",
      description: "Enjoy completely private one-on-one video sessions with Shanaya in a secure virtual environment designed for your comfort.",
      icon: (
        <svg className="h-8 w-8 text-theme-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Custom Experiences",
      description: "Personalize your video sessions with preferences and themes that match your desires for a truly customized adult entertainment experience.",
      icon: (
        <svg className="h-8 w-8 text-theme-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      )
    },
    {
      title: "Discreet Service",
      description: "Your privacy is our priority with discreet billing and secure session access that keeps your personal information confidential.",
      icon: (
        <svg className="h-8 w-8 text-theme-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "Premium Content",
      description: "Access exclusive premium content and special shows available only to subscribed members at higher tier levels.",
      icon: (
        <svg className="h-8 w-8 text-theme-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      title: "Flexible Scheduling",
      description: "Book your sessions at times that work for you, with flexible scheduling options and availability.",
      icon: (
        <svg className="h-8 w-8 text-theme-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Quality Video",
      description: "Experience video quality that brings your private sessions to life with clarity for a more immersive experience.",
      icon: (
        <svg className="h-8 w-8 text-theme-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
  ];

  return (
    <section id="features" className="py-16 bg-gradient-to-r from-pink-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="mb-4 bg-gradient-to-r from-theme-purple to-theme-pink text-white">
            Verified Premium
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Exclusive Features for Adult Entertainment
          </h2>
          <p className="text-gray-600 text-lg">
            Our platform is designed to provide the most private and personalized adult video call experience with Shanaya.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-purple-100"
            >
              <div className="rounded-full bg-purple-100 p-3 w-fit mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
