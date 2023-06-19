import { Product } from "@/Models"

export const getProduct = async (idProduct: number): Promise<Product> => {
  const controller = new AbortController()
  const signal = controller.signal

  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/${idProduct}`,
      {
        signal,
      }
    )
    if (!response.ok) {
      throw new Error("Error fetching product")
    }
    const data: Product = await response.json()
    return data
  } catch (error: any) {
    throw new Error("Error fetching product: " + error.message)
  } finally {
    controller.abort()
  }
}
