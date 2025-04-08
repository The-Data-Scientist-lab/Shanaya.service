
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CircleDollarSign, ExternalLink, MessageSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface PricingPlan {
  id: string;
  name: string;
  price: number;
  description: string;
  badge?: string;
}

const pricingPlans: PricingPlan[] = [
  {
    id: "basic",
    name: "Basic",
    price: 799,
    description: "Private video calls",
  },
  {
    id: "standard",
    name: "Standard",
    price: 1499,
    description: "Extended private video calls",
  },
  {
    id: "premium",
    name: "Premium",
    price: 2499,
    description: "Premium private video experience",
    badge: "Most Popular"
  },
  {
    id: "business",
    name: "Elite",
    price: 3999,
    description: "Elite private experience",
  },
  {
    id: "enterprise-small",
    name: "VIP Basic",
    price: 7999,
    description: "VIP private experience",
    badge: "Best Value"
  },
  {
    id: "enterprise-plus",
    name: "VIP Plus",
    price: 14999,
    description: "Enhanced VIP experience",
  },
  {
    id: "enterprise-max",
    name: "VIP Max",
    price: 24999,
    description: "Ultimate VIP experience",
  },
  {
    id: "custom",
    name: "Custom",
    price: 0,
    description: "Tailored private experience",
    badge: "Exclusive"
  }
];

const PricingCards = () => {
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSelectPlan = (plan: PricingPlan) => {
    setSelectedPlan(plan);
    setIsDialogOpen(true);
  };

  return (
    <section id="pricing" className="py-16 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="mb-4 bg-gradient-to-r from-pink-500 to-indigo-500 text-white">
            Verified ✓ Trustworthy
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Premium Private Video Sessions
          </h2>
          <p className="text-gray-600 text-lg">
            All plans include premium, private access to Shanaya
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.id}
              className="pricing-card bg-white border shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {plan.badge && (
                <div className="price-badge text-xs font-semibold">
                  {plan.badge}
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-end gap-1 mb-4">
                  {plan.price > 0 ? (
                    <span className="text-3xl font-bold">₹{plan.price}</span>
                  ) : (
                    <span className="text-2xl font-bold">Contact Us</span>
                  )}
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <Button
                  className="w-full bg-gradient-to-r from-pink-500 to-indigo-500 text-white hover:from-pink-600 hover:to-indigo-600 shadow-md"
                  onClick={() => handleSelectPlan(plan)}
                >
                  Choose Plan
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-bold">
              {selectedPlan?.name} Plan Payment
            </DialogTitle>
          </DialogHeader>
          <div className="text-center space-y-4">
            <div className="mx-auto w-64 h-64 relative p-2 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-lg shadow-lg">
              <div className="absolute inset-0.5 bg-white rounded-md flex items-center justify-center">
                <img 
                  src="/lovable-uploads/768a81e5-fa03-49f9-8e46-6fdb41166ea1.png"
                  alt="Payment QR Code"
                  className="w-full h-full object-contain p-2"
                />
              </div>
            </div>
            <p className="text-gray-600">
              Scan the QR code to complete your payment for the {selectedPlan?.name} plan.
            </p>
            <div className="flex justify-center items-center gap-2 text-pink-500 font-bold">
              <CircleDollarSign className="h-5 w-5" />
              {selectedPlan?.price > 0 ? (
                <span className="font-semibold">₹{selectedPlan?.price}</span>
              ) : (
                <span className="font-semibold">Custom Pricing</span>
              )}
            </div>
            
            <div className="mt-6 bg-gradient-to-r from-pink-500 to-indigo-500 p-0.5 rounded-lg shadow-lg">
              <div className="bg-white rounded-md p-4 flex flex-col items-center space-y-2">
                <p className="text-gray-800 font-medium">If your payment is successful, send screenshot to:</p>
                <a 
                  href="https://t.me/shanaya_Service" 
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-indigo-500 text-white px-4 py-2 rounded-full font-medium transition-all hover:shadow-lg"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="h-4 w-4" />
                  @shanaya_Service
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PricingCards;
