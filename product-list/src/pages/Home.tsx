import { products } from "../data/products";

import ProductCard from "../components/ProductCard";
import ProductImage from "../components/ProductImage";
import ProductInfo from "../components/ProductInfo";
import ViewDetailsButton from "../components/ViewDetailsButton";
import FeaturedBadge from "../components/FeaturedBadge";

function Home() {
    const handleOpenProduct = (id: number) => {
    console.log(`Navigate to Product ${id}`);
  };
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">
        Home Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id}  onClick={() => handleOpenProduct(product.id)}>
            <FeaturedBadge />
            <ProductImage image={product.image} />
            <ProductInfo product={product} />
            <ViewDetailsButton />
          </ProductCard>
        ))}
      </div>
    </>
  );
}

export default Home;