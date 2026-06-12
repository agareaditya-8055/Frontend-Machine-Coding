import { products } from "../data/products";

import ProductCard from "../components/ProductCard";
import ProductImage from "../components/ProductImage";
import ProductInfo from "../components/ProductInfo";
import AddToCartButton from "../components/AddToCartButton";
import TrendingBadge from "../components/TrendingBadge";

function Search() {
    const trackClick = (id: number) => {
        console.log(`Analytics Event ${id}`);
    };
    return (
        <>
            <h1 className="text-3xl font-bold mb-6">
                Search Results
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} onClick={() => trackClick(product.id)}>
                        <TrendingBadge />
                        <ProductImage image={product.image} />
                        <ProductInfo product={product} />
                        <AddToCartButton />
                    </ProductCard>
                ))}
            </div>
        </>
    );
}

export default Search;