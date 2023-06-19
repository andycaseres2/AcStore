import { Product } from "@/Models"

export const getProducts = async (): Promise<Product> => {
  const controller = new AbortController()
  const signal = controller.signal

  try {
    const response = await fetch(`https://fakestoreapi.com/products/`, {
      signal,
    })
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
