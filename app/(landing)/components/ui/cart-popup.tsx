import priceFormatter from "@/app/utils/price-formatter";
import Image from "next/image";
import Button from "./button";
import { FiArrowRight, FiTrash2 } from "react-icons/fi";
import { useRouter } from "next/navigation";

export const cartList = [
  {
    name: "SportsOn Hyperfast Shoes",
    category: "Running",
    imgUrl: "product-3.png",
    qty: 2,
    price: 329000,
  },
  {
    name: "SportsOn Rockets Tennis",
    category: "Tennis",
    imgUrl: "product-2.png",
    qty: 2,
    price: 999000,
  },
  {
    name: "SportsOn Slowlivin",
    category: "Running",
    imgUrl: "product-1.png",
    qty: 1,
    price: 119000,
  },
  {
    name: "SportsOn Slowlivin",
    category: "Running",
    imgUrl: "product-1.png",
    qty: 1,
    price: 229000,
  },
];

const CartPopup = () => {
  const { push } = useRouter();

  const totalPrice = cartList.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  const handleCheckout = () => {
    push("/checkout");
  };

  return (
    <div className="absolute bg-white top-12 right-0 shadow-xl shadow-black/10 border border-gray-200 w-90 z-10">
      <div className="p-4 border-b border border-gray-200 font-bold text-center">
        Shopping Cart
      </div>
      {cartList.map((item, index) => (
        <div key={index} className="border-b border-gray-200 p-4 flex gap-3">
          <div className="bg-primary-light aspect-square w-16 flex justify-center items-center">
            <Image
              src={`/images/products/${item.imgUrl}`}
              alt={item.name}
              width={63}
              height={63}
              className="aspect-square object-contain"
            />
          </div>
          <div className="self-center">
            <div className="text-sm font-medium">{item.name}</div>
            <div className="flex gap-3 text-xs font-medium">
              <div>{item.qty}x</div>
              <div className="text-primary">{priceFormatter(item.price)}</div>
            </div>
          </div>
          <Button
            size="small"
            variant="ghost"
            className="w-7 h-7 p-0! self-center ml-auto"
          >
            <FiTrash2 />
          </Button>
        </div>
      ))}
      <div className="border-t border-gray-200 p-4">
        <div className="flex justify-between font-semibold">
          <div className="text-sm">Total</div>
          <div className="text-primary text-xs">
            {priceFormatter(totalPrice)}
          </div>
        </div>
        <Button
          size="small"
          variant="dark"
          className="w-full mt-4"
          onClick={handleCheckout}
        >
          Checkout Now <FiArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default CartPopup;
