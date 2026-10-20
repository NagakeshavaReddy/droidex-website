import ProductDetail from "@/components/ProductDetail";
import { products } from "@/lib/products";

export const metadata = { title: "Thermal Camera", description: "THERMAX PRO X16 Mini dual-sensor optical and thermal gimbal camera." };

export default function ThermalCameraPage() {
  return <ProductDetail product={products.thermal} />;
}