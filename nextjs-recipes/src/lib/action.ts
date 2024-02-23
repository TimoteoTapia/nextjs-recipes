'use server';

import db from './db';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { signIn } from './auth/auth';
import { AuthError } from 'next-auth';

const bcrypt = require('bcrypt');

const FormSchemaAccount = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  middleName: z.string().optional(),
  email: z.string().email(),
  password: z.string().min(6),
});

export type StateUser = {
  errors?: {
    name?: string[];
    email?: string[];
    password?: string[];
  };
  message?: string | null;
};

const RegisterUser = FormSchemaAccount.omit({ id: true });

export async function registerUser(prevState: StateUser, formData: FormData) {
  const validatedFields = RegisterUser.safeParse({
    firstName: formData.get('firstName'),
    middleName: formData.get('middleName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create User.',
    };
  }
  const { firstName, lastName, middleName, email, password } =
    validatedFields.data;
  const role = 'user';
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await db.userRecipes.create({
      data: {
        firstName: firstName,
        middleName: middleName ?? null,
        lastName: lastName,
        email,
        password: hashedPassword,
      },
    });
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }
  redirect('/login');
}

const ProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  price: z.string(),
  stock: z.string(),
  userId: z.string(),
});

export type ProductState = {
  errors?: {
    name?: string[];
    description?: string[];
    price?: string[];
    stock?: string[];
  };
  message?: string | null;
};

const CreateProduct = ProductSchema.omit({ id: true });
const UpdateProduct = ProductSchema.omit({ id: true, userId: true });

export async function CreateProductProfile(
  prevState: ProductState,
  formData: FormData
) {
  const validatedFields = CreateProduct.safeParse({
    name: formData.get('name'),
    description: formData.get('description'),
    price: formData.get('price'),
    stock: formData.get('stock'),
    userId: formData.get('userId'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Product.',
    };
  }

  const { name, description, price, stock, userId } = validatedFields.data;

  const convertPrice = parseFloat(price);
  const convertStock = parseInt(stock);
  try {
    await db.productRecipes.create({
      data: {
        name: name,
        description: description,
        price: convertPrice,
        stock: convertStock,
        userId: userId,
      },
    });
  } catch (error) {
    return { message: 'Database Error: Failed to Create Product.' };
  }

  revalidatePath('/dashboard/profile/products');
  redirect('/dashboard/profile/products');
}

export async function UpdateProductProfile(id: string, formData: FormData) {
  const validatedFields = UpdateProduct.safeParse({
    name: formData.get('name'),
    description: formData.get('description'),
    price: formData.get('price'),
    stock: formData.get('stock'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Product.',
    };
  }

  const { name, description, price, stock } = validatedFields.data;

  const convertPrice = parseFloat(price);
  const convertStock = parseInt(stock);
  try {
    await db.productRecipes.update({
      where: { id: id },
      data: {
        name: name,
        description: description,
        price: convertPrice,
        stock: convertStock,
      },
    });
  } catch (error) {
    return { message: 'Database Error: Failed to Update Product.' };
  }

  revalidatePath('/dashboard/profile/products');
  redirect('/dashboard/profile/products');
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}
