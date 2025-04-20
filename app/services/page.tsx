import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export default function ServicesPage() {
  const packages = [
    {
      title: "Starter",
      price: "500 EGP",
      features: [
        "One-page website",
        "Responsive design",
        "Basic AI Assistant",
      ],
    },
    {
      title: "Standard",
      price: "1,000 EGP",
      features: [
        "Multi-page website",
        "SEO optimization",
        "Advanced AI Assistant",
        "Basic contact form",
      ],
    },
    {
      title: "Premium",
      price: "2,000 EGP",
      features: [
        "E-commerce support",
        "Custom dashboard",
        "Multilingual",
        "Analytics integration",
        "Priority AI Support",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-10 text-center">Our Packages</h1>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {packages.map((pkg) => (
          <Card key={pkg.title} className="bg-gray-800">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold">{pkg.title}</h2>
              <p className="text-lg text-blue-400">{pkg.price}</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                {pkg.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="block mt-4 text-center bg-blue-600 rounded-xl py-2 hover:bg-blue-700"
              >
                Request This Package
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
