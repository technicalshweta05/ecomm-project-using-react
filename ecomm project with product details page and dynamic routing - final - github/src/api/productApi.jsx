const BASE_URL = "https://dummyjson.com/products";

export async function getProducts(limit = 9, skip = 0) {
  const response = await fetch(
    `${BASE_URL}?limit=${limit}&skip=${skip}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return await response.json();
}

export async function getProductById(id) {
  const response = await fetch(`${BASE_URL}/${id}`);

  if (!response.ok) {
    throw new Error("Product not found");
  }

  return await response.json();
}