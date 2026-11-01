import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Дизайн
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="bg-blue-900 text-white rounded-full px-12 py-3 uppercase text-sm font-semibold hover:bg-blue-800 transition-colors duration-200">
            Смотреть всю коллекцию
          </button>
        </div>
      </div>
    </div>
  );
}