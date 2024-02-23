export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
};

export type Category = {
  id: string;
  name: string;
  description: string;
  image: string;
};

export type Product = {
  id: string;
  artisant_id: string;
  category_id: string;
  name: string;
  description: string;
  price: number;
  image: string;
};

export type Review = {
  id: string;
  product_id: string;
  user_id: string;
  description: string;
};

export type Revenue = {
  month: string;
  revenue: number;
};

export type LatestInvoice = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: string;
};

// Type for edit product profile

export type EditProductType = {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
};
