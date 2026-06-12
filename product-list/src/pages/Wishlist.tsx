import { products } from "../data/products";

import ProductCard from "../components/ProductCard";
import ProductImage from "../components/ProductImage";
import ProductInfo from "../components/ProductInfo";
import RemoveButton from "../components/RemoveButton";

function Wishlist() {
     const openWishlistModal = (id: number) => {
    console.log(`Open Wishlist Modal ${id}`);
  };
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">
        Wishlist
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id}  onClick={() => openWishlistModal(product.id)}>
            <ProductImage image={product.image} />
            <ProductInfo product={product} />
            <RemoveButton />
          </ProductCard>
        ))}
      </div>
    </>
  );
}

export default Wishlist;