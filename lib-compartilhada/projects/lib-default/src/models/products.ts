import {Product} from "./product";

export interface Products {
  total: number | null,
  skip: number | null,
  limit: number | null
  products: Product[] | null
}
