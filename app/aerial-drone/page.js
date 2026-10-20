import ProductDetail from "@/components/ProductDetail";
import { products } from "@/lib/products";

export const metadata = { title: "Aerial Drone", description: "Outback DXPRO 15 agricultural drone by Droidex Australia." };

export default function AerialDronePage() {
  return <ProductDetail product={products.aerial} />;
}