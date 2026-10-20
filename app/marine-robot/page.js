import ProductDetail from "@/components/ProductDetail";
import { products } from "@/lib/products";

export const metadata = { title: "Marine Robot", description: "DeepDive / ROMAR remotely operated underwater robot by Droidex." };

export default function MarineRobotPage() {
  return <ProductDetail product={products.marine} />;
}