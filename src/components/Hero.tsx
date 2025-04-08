
import { Badge } from "@/components/ui/badge";
import { Star, Shield, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-theme-blue to-theme-purple py-16 text-white lg:py-24">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/85a8e142-ba7b-496d-8240-9887580d8664.png')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="container relative z-10 mx-auto grid gap-8 px-4 md:grid-cols-2 md:items-center md:gap-12 lg:px-8">
        <div className="space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 py-2 px-3 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full shadow-lg">
            <Shield className="h-5 w-5 text-white fill-white/20" />
            <span className="font-bold text-sm text-white">100% Verified Premium</span>
          </div>
          
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            <span className="text-white block text-8xl md:text-9xl mb-2 glow-effect font-extrabold">SHANAYA</span>
            Private Videos Calls
          </h1>
          
          <p className="max-w-prose text-lg text-white/90">
            Scroll down to see the pricing and packages and ajao guys💦 sabka pani nikalungi ajao 💋.
          </p>
          
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-sm font-medium">
              <span className="font-bold">5.0</span> rating from over{" "}
              <span className="font-bold">600+</span> reviews
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <a
              href="https://t.me/shanaya_Service"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-pink-500 to-indigo-500 px-6 py-3 font-medium text-white transition-all hover:shadow-lg hover:from-pink-600 hover:to-indigo-600"
            >
              Telegram
            </a>
          </div>
        </div>
        
        <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-full border-4 border-white/20 md:ml-auto animate-fade-in">
          <img
            src="/lovable-uploads/85a8e142-ba7b-496d-8240-9887580d8664.png"
            alt="Shanaya"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      
      <div className="container relative z-10 mx-auto mt-16 flex flex-wrap items-center justify-center gap-8 px-4">
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-gradient-to-r from-pink-500 to-indigo-500 p-2 backdrop-blur-sm">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
          </div>
          <span className="font-medium">Private Sessions</span>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-gradient-to-r from-pink-500 to-indigo-500 p-2 backdrop-blur-sm">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
          </div>
          <span className="font-medium">Discreet Service</span>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-gradient-to-r from-pink-500 to-indigo-500 p-2 backdrop-blur-sm">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
          </div>
          <span className="font-medium">Premium Experience</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
