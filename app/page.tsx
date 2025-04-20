import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [messages, setMessages] = useState([
    { role: "ai", text: "Hi there! Need a website? I'm here to help!" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessage = { role: "user", text: input };
    setMessages([...messages, newMessage]);
    setInput("");

    // Simulate AI response
    const aiResponse = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });

    const data = await aiResponse.json();
    setMessages((prev) => [...prev, { role: "ai", text: data.reply }]);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold">TechTropolis</h1>
        <p className="text-lg mt-2">Web creation services starting at 500 EGP</p>
      </header>

      <section className="max-w-4xl mx-auto grid gap-6">
        <Card>
          <CardContent className="p-4 space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`rounded-xl p-3 max-w-xl w-fit ${
                  msg.role === "ai" ? "bg-gray-800" : "bg-blue-600 self-end"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about our services..."
          />
          <Button onClick={handleSend}>Send</Button>
        </div>

        <section className="mt-10 space-y-6">
          <Card>
            <CardContent className="p-4">
              <h2 className="text-2xl font-semibold mb-2">Our Packages</h2>
              <ul className="space-y-2">
                <li><strong>Starter:</strong> 500 EGP - One-page site, basic AI chat</li>
                <li><strong>Standard:</strong> 1,000 EGP - Multi-page, SEO, advanced chat</li>
                <li><strong>Premium:</strong> 2,000 EGP - E-commerce, analytics, multilingual</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </section>
    </div>
  );
}
