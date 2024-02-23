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
      <div className='bg-gray-100 py-12'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold text-gray-900 mb-8'>
            Your Products
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
            {products.map((product) => (
              <div
                key={product.id}
                className='border border-gray-300 rounded-lg overflow-hidden'
              >
                <div className='relative aspect-w-1 aspect-h-1'>
                  <Image
                    src={product.image || 'https://via.placeholder.com/200'}
                    alt={product.name}
                    className='object-cover w-full h-full'
                    width={200}
                    height={200}
                  />
                </div>
                <div className='p-4'>
                  <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                    {product.name}
                  </h3>
                  <p className='text-gray-700 mb-2'>{product.description}</p>
                  <p className='text-gray-900 font-semibold'>
                    ${product.price}
                  </p>
                  <div className='mt-4 flex justify-center'>
                    <Link href={`/dashboard/products/${product.id}`}>
                      <p className='bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-md transition duration-300'>
                        Manage
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
