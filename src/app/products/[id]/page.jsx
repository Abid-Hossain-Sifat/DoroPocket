"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useTheme } from "next-themes";
import { pDetails } from "@/lib/Details";
import Link from "next/link";
import { ChevronLeft } from "lucide-react"; 

const DetailsPage = () => {
  const { id } = useParams();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await pDetails(id);
        setProduct(data);
        setMainImage(data.thumbnail);
      } catch (err) {
        console.log("Error fetching product:", err);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  if (!product) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  const allImages = [product.thumbnail, ...(product.images || [])];

  return (
    <div className={`min-h-screen py-12 transition-colors duration-300 ${isDark ? "bg-[#0B111E] text-white" : "bg-slate-50 text-slate-900"}`}>
      <div className="max-w-[80%] mx-auto">
        
        {/* BACK LINK WITH LUCIDE ICON */}
        <Link 
          href='/products'
          className={`inline-flex items-center gap-2 mb-8 text-sm font-medium transition-colors ${
            isDark ? "text-slate-400 hover:text-white" : "text-slate-500 hover:text-[#0071E3]"
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
          Back to all products
        </Link>

        {/* MAIN CONTAINER */}
        <div className={`grid gap-12 lg:grid-cols-2 rounded-[2rem] border p-8 items-start ${isDark ? "border-slate-800 bg-slate-900/40" : "border-slate-200 bg-white"}`}>
          
          {/* IMAGE SECTION */}
          <div className="flex flex-col gap-4 h-full">
            <div className="overflow-hidden rounded-2xl bg-slate-100 shadow-sm">
              <img src={mainImage} alt={product.name} className="h-[550px] w-full object-cover" />
            </div>
            <div className="flex gap-4">
              {allImages.map((img, i) => (
                <div 
                  key={i} 
                  onClick={() => setMainImage(img)} 
                  className={`h-20 w-20 cursor-pointer rounded-xl border-2 overflow-hidden transition-all ${
                    mainImage === img ? "border-[#0071E3] scale-105" : "border-transparent hover:border-slate-300"
                  }`}
                >
                  <img src={img} className="h-full w-full object-cover" alt="thumb" />
                </div>
              ))}
            </div>
          </div>

          {/* DETAILS SECTION */}
          <div className="flex flex-col h-full justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#0071E3]">{product.category}</p>
              <h1 className="mt-3 text-4xl font-bold">{product.name}</h1>
              <p className="mt-2 text-sm text-slate-500">By {product.brand}</p>
              <h2 className="mt-8 text-4xl font-bold text-[#0071E3]">৳ {product.price.toLocaleString()}</h2>
              <p className="mt-6 text-base text-slate-600 leading-relaxed">{product.description}</p>

              <ul className="mt-8 space-y-3">
                {product.features?.map((feature, i) => (
                  <li key={i} className="flex gap-3 text-sm items-center">
                    <span className="text-[#0071E3] text-lg">•</span> {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-slate-100 text-sm space-y-3">
                {Object.entries(product.specifications || {}).map(([key, value]) => (
                  <div key={key} className="flex gap-2">
                    <span className="font-bold capitalize w-28">{key}:</span>
                    <span className="text-slate-500">{value}</span>
                  </div>
                ))}
                <div className="flex gap-2">
                  <span className="font-bold w-28">Stock:</span>
                  <span className={product.stock > 0 ? "text-green-500" : "text-red-500"}>
                    {product.stock > 0 ? `${product.stock} items left` : "Out of stock"}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-10 flex gap-4">
              <button className="flex-1 rounded-full border border-slate-300 px-6 py-4 font-medium hover:bg-slate-50 transition">Add to Cart</button>
              <button className="flex-1 rounded-full bg-[#0071E3] px-6 py-4 font-medium text-white hover:bg-[#005bb5] transition">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;