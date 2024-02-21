'user server';

import db from './db';
import { unstable_noStore as noStore, revalidatePath } from 'next/cache';

// Fetchs for users data
export async function fetchUserById(id: string) {
  noStore();
  try {
    const user = await db.userRecipes.findUnique({
      where: {
        id,
      },
    });
    return user;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export async function fetchUserByEmail(email: string) {
  noStore();
  try {
    const user = await db.userRecipes.findUnique({
      where: {
        email,
      },
    });
    return user;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export async function fetchUsers() {
  noStore();
  try {
    const users = await db.userRecipes.findMany();
    return users;
  } catch (error) {
    console.error('Failed to fetch users:', error);
    throw new Error('Failed to fetch users.');
  }
}

// Fetchs for products data

export async function fetchProducts() {
  noStore();
  try {
    const products = await db.productRecipes.findMany();
    return products;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw new Error('Failed to fetch products.');
  }
}

export async function fetchProductById(id: string) {
  noStore();
  try {
    const product = await db.productRecipes.findUnique({
      where: {
        id,
      },
    });
    return {
      id: product?.id,
      name: product?.name,
      description: product?.description,
      price: product?.price,
      stock: product?.stock,
      image: product?.image,
    };
  } catch (error) {
    console.error('Failed to fetch product:', error);
    throw new Error('Failed to fetch product.');
  }
}

// Fetch product data with search query

export async function fetchFilteredProducts(query: string) {
  noStore();
  try {
    const products = await db.productRecipes.findMany({
      where: {
        name: {
          contains: query,
        },
      },
    });
    return products;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw new Error('Failed to fetch products.');
  }
}

export async function fetchProductsByUserId(userId: string) {
  noStore();
  try {
    const products = await db.productRecipes.findMany({
      where: {
        userId,
      },
    });
    return products;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw new Error('Failed to fetch products.');
  }
}

export async function deleteProduct(id: string) {
  noStore();
  try {
    const product = await db.productRecipes.findUnique({
      where: {
        id,
      },
    });

    if (!product) {
      throw new Error('Product not found.');
    }

    // Check again right before deleting
    const productToDelete = await db.productRecipes.findUnique({
      where: {
        id,
      },
    });

    if (!productToDelete) {
      throw new Error('Product not found.');
    }

    await db.productRecipes.delete({
      where: {
        id,
      },
    });

    revalidatePath('dashboard/profile/products');
  } catch (error) {
    console.error('Failed to delete product:', error);
    throw new Error('Failed to delete product.');
  }
}

// Fetch for reviews

export async function fetchReviewsByUserId(id: string) {
  noStore();
  try {
    const reviews = await db.productRecipes.findMany({
      where: {
        userId: id,
      },
    });
    return reviews;
  } catch (error) {
    console.error('Failed to fetch reviews:', error);
    throw new Error('Failed to fetch reviews.');
  }
}
