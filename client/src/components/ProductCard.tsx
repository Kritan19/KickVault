import Image from 'next/image';

export type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  image_url: string;
  category: string;
};

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  // --- THIS IS THE CHANGED PART ---
  // 1. Format just the number, with commas and 2 decimal places.
  const formattedNumber = new Intl.NumberFormat('en-IN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(parseFloat(product.price));

  // 2. Manually create the final string with "Rs"
  const formattedPrice = `Rs ${formattedNumber}`;
  // --- END OF CHANGED PART ---

  return (
    <div className="border rounded-lg p-4 shadow-lg bg-gray-800 text-white flex flex-col">
      <div className="relative w-full h-60 rounded-md mb-4 overflow-hidden">
        <Image
          src={product.image_url}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      <div className="flex-grow">
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p className="text-gray-400 text-sm mt-1">{product.category}</p>
        <p className="mt-2 text-sm">{product.description}</p>
      </div>
      <div className="mt-4">
        {/* Use the new manually created price string */}
        <p className="text-xl font-semibold">{formattedPrice}</p>
      </div>
    </div>
  );
}