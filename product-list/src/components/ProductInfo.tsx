import type { Product } from "../types/product";


interface ProductInfoProps {
  product: Product;
}

function ProductInfo({
  product,
}: ProductInfoProps) {
  return (
    <>
      <h2 className="text-xl font-bold mt-3">
        {product.name}
      </h2>

      <p className="text-gray-600">
        ₹{product.price.toLocaleString()}
      </p>
    </>
  );
}

export default ProductInfo;