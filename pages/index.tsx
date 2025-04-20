import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-6">Welcome to TechTropolis</h1>
      <p className="text-lg mb-4">
        We create smart, AI-powered websites starting from 500 EGP.
      </p>
      <Button onClick={() => alert("Let's build something amazing!")}>
        Get Started
      </Button>
    </div>
  );
}
