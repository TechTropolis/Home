import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>TechTropolis</title>
        <meta name="description" content="TechTropolis - Web development services" />
      </head>
      <body className="bg-gray-900 text-white">
        <header className="p-4 bg-gray-800">
          <h1 className="text-3xl font-bold">TechTropolis</h1>
        </header>
        <main>{children}</main>
        <footer className="p-4 bg-gray-800 text-center">
          <p>&copy; 2025 TechTropolis. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
