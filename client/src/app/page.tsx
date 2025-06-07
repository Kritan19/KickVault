import ProductCard, { Product } from '@/components/ProductCard';

// This Server Component fetches the data
async function getProducts(): Promise<Product[]> {
  try {
    // We use the new API endpoint
    const response = await fetch('http://localhost:5000/api/products', {
      cache: 'no-store' // Use no-store to always get fresh data during development
    });

    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    
    const products = await response.json();
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return []; // Return an empty array on error
  }
}

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Welcome to KickVault
      </h1>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">
          No products found. Please check if the server is running and the database is populated.
        </p>
      )}
    </main>
  );
}
