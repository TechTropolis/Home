export function Card({ children }: any) {
  return (
    <div className="bg-gray-800 rounded-2xl shadow-md p-4">{children}</div>
  );
}

export function CardContent({ children, className = \"\" }: any) {
  return <div className={\"\" + className}>{children}</div>;
}
