import type { ReactNode } from "react";


interface ProductCardProps {
  children: ReactNode;
  onClick?: () => void;
}

function ProductCard({ children, onClick }: ProductCardProps) {
  return (
    <div onClick={onClick} className="bg-white rounded-xl shadow-md p-4">
      {children}
    </div>
  );
}

export default ProductCard;