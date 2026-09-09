import Image from "next/image";
import { LuShoppingCart } from "react-icons/lu";
import { ImLocation2 } from "react-icons/im";

function Header() {
  return (
    <div className="bg-[#131921] py-2 text-white w-full">
      <div className="flex items-center gap-4 px-3 py-1">

        {/* Logo */}
        <div className="shrink-0">
          <Image
            alt="Amazon website logo"
            src="/amazon-logo-2.webp"
            width={100}
            height={50}
            loading="eager"
            className="w-[110px] h-auto"
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
        <div className="flex-1">
          <input
            className="bg-white w-full text-black outline-none border-2 border-transparent focus:border-black p-1 rounded-lg h-10"
            type="text"
            placeholder="Search for the products"
          />
        </div>

        {/* Account */}
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
        <div className="flex items-center gap-1 shrink-0">
          <div className="relative">
            <p className="absolute -top-2 left-4 text-sm">0</p>
            <LuShoppingCart className="w-10 h-10" />
          </div>

          <p>Cart</p>
        </div>

      </div>
    </div>
  );
}

export default Header;