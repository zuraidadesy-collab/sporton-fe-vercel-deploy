"use client";

import Image from "next/image";
import { FiAlertCircle } from "react-icons/fi";

const OrderRejected = () => {
  return (
    <div className="bg-white w-160 p-16 flex flex-col justify-center items-center mx-auto">
      {/* <Image
        src="/images/icon-order-confirmed.svg"
        alt="order confirmed"
        width={117}
        height={117}
        className="mb-4"
      /> */}
      <div className="w-20 h-20 bg-primary-light rounded-full mx-auto p-3 mb-5 flex justify-center items-center text-primary">
        <FiAlertCircle size={52} />
      </div>
      <h2 className="text-2xl font-semibold mb-2">Order Rejected !!</h2>
      <p className="text-center mb-8">
        We're sorry your order was rejected because your payment proof is not valid. Please try again or
        contact support for assistance.
      </p>
    </div>
  );
};

export default OrderRejected;
