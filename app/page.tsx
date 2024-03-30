import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <>
    <p>This is a Next.js app</p>
    <Link href="/users">User</Link>
    <ProductCard />
    </>
  );
}
