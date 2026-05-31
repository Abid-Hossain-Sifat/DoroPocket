"use client";

import React, { useState, useEffect } from "react";

import { useTheme } from "next-themes";

import { products } from "@/lib/data";
import Link from "next/link";

const ProductsPage = () => {
  const [data, setData] = useState([]);

  const { theme } = useTheme();

  const isDark = theme === "dark";

  useEffect(() => {
    const fetchData = async () => {
      const result = await products();
      console.log(result);

      setData(result);
    };

    fetchData();
  }, []);

  return (
    <main
      className={`min-h-screen transition-colors duration-300 ${isDark ? "bg-[#0B111E] text-white" : "bg-slate-50 text-slate-900"}`}
    >
      <div className="max-w-[80%] mx-auto py-12">
        {/* Header Section */}

        <div
          className={`mb-12 flex flex-col gap-6 rounded-[2rem] border p-8 shadow-sm ${isDark ? "border-slate-800 bg-slate-950/80" : "border-slate-200 bg-white/90"}`}
        >
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#0071E3]">
              Product Catalog
            </p>

            <h1 className="mt-4 text-4xl font-semibold">
              Explore All Products
            </h1>

            <p
              className={`mt-4 leading-7 ${isDark ? "text-slate-400" : "text-slate-600"}`}
            >
              Discover premium gadgets and smart devices crafted for
              performance, style, and everyday innovation.
            </p>
          </div>
        </div>

        {/* Products Grid */}

        <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.map((product, index) => (
            <article
              key={product._id || index}
              className={`group overflow-hidden rounded-[2rem] border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                isDark
                  ? "border-slate-800 bg-slate-900 hover:border-[#0071E3]/50"
                  : "border-slate-200 bg-white hover:border-[#0071E3]/30"
              }`}
            >
              {/* Product Image */}
              <div className="overflow-hidden">
                <img
                  src={product.thumbnail}
                  alt={product.name}
                  className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Product Content */}
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.25em] text-[#0071E3]">
                  {product.brand}
                </p>

                <h2 className="mt-3 text-xl font-semibold line-clamp-2">
                  {product.name}
                </h2>

                <p
                  className={`mt-4 text-sm leading-6 line-clamp-3 ${
                    isDark ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  {product.description ||
                    "Premium gadget engineered for performance and innovation."}
                </p>

                {/* Price */}
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#0071E3]">
                    ${product.price}
                  </span>
                </div>

                {/* Buttons */}
                <div className="mt-6 flex gap-3">
                  
                    <button
                    className={`flex-1 rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                      isDark
                        ? "border-slate-700 text-white hover:border-[#0071E3] hover:text-[#0071E3]"
                        : "border-slate-300 text-slate-900 hover:border-[#0071E3] hover:text-[#0071E3]"
                    }`}
                  >
                    <Link href={`/products/${product._id}`}>
                      See Details
                    </Link>
                  </button>

                  <button className="flex-1 rounded-full bg-[#0071E3] px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#005bb5] hover:shadow-lg">
                    Buy Now
                  </button>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
};

export default ProductsPage;
