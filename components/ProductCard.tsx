"use client";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

interface ProductCardProps {
  name: string;
  description: string;
  category: string;
}

export default function ProductCard({ name, description, category }: ProductCardProps) {
  const { t } = useLanguage();
  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:border-[#FFC107] hover:shadow-md transition-all">
      <h3 className="font-semibold text-gray-900 mb-1">{name}</h3>
      <p className="text-gray-500 text-sm mb-3">{description}</p>
      <Link
        href={`/cotizar?category=${encodeURIComponent(category)}`}
        className="inline-block bg-[#FFC107] text-[#1A1A1A] text-xs font-bold px-3 py-1.5 rounded hover:bg-yellow-400 transition-colors"
      >
        {t.common.getQuote}
      </Link>
    </div>
  );
}
