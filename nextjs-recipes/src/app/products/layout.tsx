'use client';

import { useState, useEffect } from 'react';
import { fetchProducts } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string | null;
  description: string | null;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filterName, setFilterName] = useState<string>('');

  useEffect(() => {
    const obtainProducts = async () => {
      try {
        const productsData: Product[] = await fetchProducts();
        setProducts(productsData);
      } catch (error: any) {
        console.error('Error to fetch the products', error.message);
      }
    };

    obtainProducts();
  }, []);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterName(event.target.value);
  };

  const productFilter = products.filter((product) =>
    product.name.toLowerCase().includes(filterName.toLowerCase())
  );
  return (
    <>
      <div className='container mx-auto py-12 px-4'>
        <h1 className='text-4xl font-bold text-gray-900 mb-8'>Products</h1>
        <input
          type='text'
          placeholder='Filter by name'
          value={filterName}
          onChange={handleFilterChange}
          className='w-full max-w-md border border-gray-300 rounded-md px-4 py-2 mb-8 focus:outline-none focus:border-blue-500'
        />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
          {productFilter.map((product) => (
            <div
              key={product.id}
              className='border border-gray-300 rounded-lg overflow-hidden'
            >
              <div className='relative aspect-w-1 aspect-h-1'>
                <Image
                  src={product.image || 'https://via.placeholder.com/200'}
                  alt={product.name}
                  layout='fill'
                  objectFit='cover'
                  className='hover:scale-105 transition-transform duration-300'
                />
              </div>
              <div className='p-4'>
                <h2 className='text-lg font-semibold text-gray-900 mb-2'>
                  {product.name}
                </h2>
                <p className='text-gray-700 mb-2'>{product.description}</p>
                <p className='text-gray-900 font-semibold'>${product.price}</p>
                <div className='mt-4 flex justify-center'>
                  <Link href={`/products/${product.id}`}>
                    <p className='bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-md transition duration-300'>
                      View Item
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
