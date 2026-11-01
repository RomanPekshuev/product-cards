'use client';

import Image from 'next/image';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-[24px] p-4 shadow-sm flex flex-col h-full">
      <div className="bg-slate-100 rounded-[20px] aspect-square flex items-center justify-center overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={300}
          className="object-contain"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://placehold.co/300x300/f1f5f9/64748b?text=${encodeURIComponent(product.title)}`;
          }}
        />
      </div>

      <h3 className="text-xl font-bold mt-4 text-gray-900">
        {product.title}
      </h3>

      <p className="text-sm text-gray-600 mt-2 leading-relaxed">
        {product.description}
      </p>

      <p className="text-sm text-gray-600 mt-2">
        {product.price} ₽
      </p>

      <button className="mt-4 bg-blue-900 text-white rounded-full px-6 py-2 uppercase text-xs font-semibold hover:bg-blue-800 transition-colors duration-200 self-start">
        В корзину
      </button>
    </div>
  );
}