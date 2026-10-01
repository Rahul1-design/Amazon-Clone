"use client";

import Image from "next/image";
import { LuShoppingCart } from "react-icons/lu";
import { ImLocation2 } from "react-icons/im";
import { IoSearchSharp } from "react-icons/io5";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { useRouter } from "next/navigation";

const itemList = [
  "All",
  "Prime Video",
  "Coupons",
  "Customer Service",
  "Today's Deals",
  "Registry",
  "Gift Cards",
  "Sell",
];

function Header() {
  const router = useRouter();
  const homePage = () => {
    router.push("/");
  };
  const searching = () => {
    if (!query.trim()) return;
    router.push(`/search/${encodeURIComponent(query.trim())}`);
  };
  const [query, setQuery] = useState<string>("");
  return (
    <>
      {/*  Top Header */}
      <div className="bg-[#131921] py-2 text-white w-full">
        <div className="flex items-center gap-4 px-3 py-1">
          {/* Logo */}
          <div className="shrink-0">
            <Image
              alt="Amazon website logo"
              src="/amazon-logo-2.webp"
              width={100}
              height={50}
              onClick={homePage}
              loading="eager"
              className="w-27.5 h-auto"
            />
          </div>

          {/* Location */}
          <div className="flex items-center shrink-0">
            <ImLocation2 size={25} />

            <div className="ml-1">
              <p className="text-xs">Deliver to</p>
              <p className="font-medium">Nepal</p>
            </div>
          </div>

          {/* Search */}
          <div className="flex flex-1 relative items-center">
            <div className="flex-1">
              <input
                value={query}
                onKeyDown={(e) => {
                  if (e.key === "Enter") return searching();
                }}
                onChange={(e) => setQuery(e.target.value)}
                className="bg-white w-full text-black outline-none  border-transparent focus:border-black p-1 rounded-md h-10 pl-3"
                type="text"
                placeholder="Search for the products"
              />
            </div>

            <div
              onClick={searching}
              className="absolute right-0 bg-yellow-400 hover:brightness-90 hover:cursor-pointer rounded-r-md h-10 w-10 flex justify-center items-center"
            >
              <IoSearchSharp size={25} className=" text-black  " />
            </div>
          </div>

          {/* Account */}
          <div className="flex gap-10">
            <div className="shrink-0">
              <p className="text-xs">Hello, Rahul</p>
              <p className="font-medium text-sm">Account & Lists</p>
            </div>

            {/* Orders */}
            <div className="shrink-0">
              <p className="text-xs">Returns</p>
              <p className="font-medium text-sm">& Orders</p>
            </div>

            {/* Cart */}
            <div className="flex items-center gap-1 shrink-0 cursor-pointer mr-3">
              <div className="relative">
                <p className="absolute -top-2 left-4 text-sm">0</p>
                <LuShoppingCart className="w-10 h-10" />
              </div>
              <p>Cart</p>
            </div>
          </div>
        </div>
      </div>
      {/* Buttom header */}
      <div className="bg-[#232F3E] text-white flex items-center justify-between h-11 gap-7">
        <div className="flex items-center">
          {itemList.map((item, index) => {
            return (
              <Link
                key={index}
                href={`/${item}`}
                className="flex items-center gap-2 hover:border border border-transparent hover:border-white p-2 whitespace-nowrap shrink-0 max-md:text-sm"
              >
                {item === "All" && <FiMenu size={22} />}
                {item}
              </Link>
            );
          })}
        </div>
        <div className="mr-5">
          <h1 className="text-yellow-400 font-lg font-semibold cursor-pointer hover:underline whitespace-nowrap max-md:text-sm">
            Sign Out
          </h1>
        </div>
      </div>
    </>
  );
}

export default Header;
