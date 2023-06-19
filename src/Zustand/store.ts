import { create } from "zustand"
import { Product } from "@/Models/product.model"

type AppStore = {
  product: Product
  //setProduct: (data: Product) => void
}

const emptyProduct: Product = {
  id: 0,
  title: "",
  price: 0,
  description: "",
  category: "",
  image: "",
  rating: {
    rate: 0,
    count: 0,
  },
}

const useStore = create<AppStore>((set) => ({
  product: emptyProduct,
  //setProduct: (data) => set({ product: data }),
}))

export default useStore
