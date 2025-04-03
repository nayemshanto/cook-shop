"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";

const HomeSearch = () => {
  const [items, setItems] = useState<string[]>([]);
  const [search, setSearch] = useState("");

  const addItem = (item?: string) => {
    if (!search) return;
    const newItem = (item || search).toLowerCase().trim();
    if (items.find((i) => i === newItem)) return;
    setItems([...items, newItem]);
    setSearch("");
  };

  const removeItem = (item: String) => {
    setItems(items.filter((i) => i !== item));
  };

  const getFilterItems = () => {
    if (!search) return [];
    const score = catagories.map((item) => ({
      text: item,
      score: item.includes(search) ? (item === search ? 2 : 1) : 0,
    }));

    const match = score
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score);

    const additional = catagories
      .filter((item) => !match.find((i) => i.text === item))
      .slice(0, Math.max(0, 5 - match.length));

    return [...match.map((item) => item.text), ...additional];
  };

  const filterItems = getFilterItems();
  const bestItems = filterItems[0];

  return (
    <>
      <div className="flex items-center gap-3 border border-[#b3b3b3] px-2.5 py-1.5 rounded-t-xl w-[22rem] md:w-[44rem]">
        <Image alt="search" src="/search.svg" width={17} height={14} />
        {items.length !== 0 && (
          <div className="flex items-center gap-1">
            {items.map((item) => (
              <div
                key={item}
                className="flex  items-center  gap-1 bg-[#ff7a00] text-white text-xs px-2 py-1 rounded-full"
              >
                <span>{item}</span>
                <button
                  type="button"
                  title="remove"
                  key={item}
                  className="cursor-pointer"
                  onClick={() => removeItem(item)}
                >
                  <Image src="/close.svg" width={12} height={12} alt="close" />
                </button>
              </div>
            ))}
          </div>
        )}
        <input
          className="bg-transparent focus:outline-none text-[#ff7a00] text-[14px] overflow-hidden"
          type="text"
          placeholder={items.length > 0 ? "" : "Search for products..."}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addItem()}
          value={search}
        />
      </div>
      {search && (
        <div className="bg-[#f3f3f3] border border-[#b3b3b3] rounded-b-xl w-[22rem] md:w-[44rem] pb-2.5 flex flex-col">
          {filterItems.map((item) => (
            <button
              key={item} 
              type="button" 
              
              className={cn(
                "px-3 py-1 hover:bg-[#cccccc]/50 cursor-pointer hover:border-s hover:border-[#ff7a00] text-start",
                bestItems === item &&
                  "bg-[#cccccc]/50 border-s border-[#ff7a00]"
              )}
              onClick={() => addItem(item)}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default HomeSearch;

const catagories = [
  "Mango",
  "Orange",
  "Apple",
  "Banana",
  "Pineapple",
  "Peach",
  "Kiwi",
];
