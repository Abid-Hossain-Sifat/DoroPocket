"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { products } from "@/lib/data";

const TopItem = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await products();

      const topProducts = result
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 4);

      setData(topProducts);
    };

    fetchData();
  }, []);

  return (
    <section
      className="py-16 transition-colors duration-300 bg-slate-50 text-slate-900 dark:bg-[#0B111E] dark:text-white"
    >
      <div className="max-w-[80%] mx-auto">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#0071E3]">
            Featured Products
          </p>

          <h2 className="mt-3 text-4xl font-semibold">
            Top Rated Products
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {data.map((product) => (
            <div
              key={product._id}
              className="rounded-[2.5rem] border overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl bg-white border-slate-200 dark:bg-slate-900 dark:border-slate-800"
            >
              <img
                src={product.thumbnail}
                alt={product.name}
                className="h-56 w-full object-cover"
              />

              <div className="p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-[#0071E3]">
                  {product.category}
                </p>

                <h3 className="mt-2 text-lg font-semibold line-clamp-1">
                  {product.name}
                </h3>

                <p className="mt-4 text-2xl font-bold text-[#0071E3]">
                  ${product.price}
                </p>

                <div className="mt-5 flex gap-2">
                  <Link
                    href={`/products/${product._id}`}
                    className="flex-1 rounded-full border px-4 py-2 text-center text-sm font-medium transition border-slate-300 hover:border-[#0071E3] hover:text-[#0071E3] dark:border-slate-700 dark:hover:border-[#0071E3] dark:hover:text-[#0071E3]"
                  >
                    See Details
                  </Link>

                  <button className="flex-1 rounded-full bg-[#0071E3] px-4 py-2 text-sm font-semibold text-white hover:bg-[#005bb5] transition">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopItem;