import ProductDetail from "@/components/ProductDetail";
import { products } from "@/lib/products";

export const metadata = { title: "E-Boat", description: "Electric Boat Retrofit Propulsion System by Droidex Australia." };

export default function EBoatPage() {
  return <ProductDetail product={products.boat} />;
}