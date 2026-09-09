import Image from "next/image";
import { LuShoppingCart } from "react-icons/lu";
import { ImLocation2 } from "react-icons/im";

function Header() {
  return (
    <div className="bg-[#131921] text-white w-full ">
      <div className="flex items-center">
        <div className="w-1/5 mx-3">
          <Image
            alt="Amazon website logo"
            src="/amazon-logo-2.webp"
            width={100}
            height={50}
            loading="eager"
            className="w-27.5 h-auto py-2"
          />
        <div className="flex ">
          <ImLocation2 size={25} />
          <div className="w-20">
            <h2>Deliver to</h2>
            <h2>Nepal</h2>
          </div>
        </div>
        </div>
        <div className="w-3/5">
          <input
            className="bg-white w-full text-black  outline-none  focus:border-black border-2 p-1 rounded-lg h-10"
            type="text"
            placeholder="Seach for the products"
          />
        </div>
        <div className="flex items-center">
        <div className="m-3 w-30">
          <h2 className="text-xs">Hello, Rahul</h2>
          <h2 className="font-medium text-sm">Account & Lists</h2>
        </div>
        <div className="w-20">
          <p className="text-xs">Returns</p>
          <h2 className="font-medium text-sm">& Orders</h2>
        </div>
        <div className="flex items-center mx-5">
          <p>0</p>
          <div>
          <LuShoppingCart  className="w-20 h-10" />
          </div>
          <h1>cart</h1>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
