interface ProductImageProps {
  image: string;
}

function ProductImage({
  image,
}: ProductImageProps) {
  return (
    <img
      src={image}
      alt="product"
      className="w-full h-52 object-cover rounded-lg"
    />
  );
}

export default ProductImage;