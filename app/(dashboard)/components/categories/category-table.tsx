import priceFormatter from "@/app/utils/price-formatter";
import Image from "next/image";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

const categoryData = [
  {
    name: "Running",
    imageUrl: "/images/categories/category-running.png",
    description: "lorem ipsum dolor sit amet",
  },
   {
    name: "Running",
    imageUrl: "/images/categories/category-running.png",
    description: "lorem ipsum dolor sit amet",
  },
   {
    name: "Running",
    imageUrl: "/images/categories/category-running.png",
    description: "lorem ipsum dolor sit amet",
  },
];

const CategoryTable = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="px-6 py-4 font-semibold">Product</th>
            <th className="px-6 py-4 font-semibold">Description</th>
            <th className="px-6 py-4 font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categoryData.map((data, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 last:border-b-0"
            >
              <td className="px-6 py-4 font-medium">
                <div className="flex gap-2 items-center">
                  <div className="aspect-square bg-gray-100 rounded-md">
                    <Image
                      src={data.imageUrl}
                      alt={data.name}
                      width={52}
                      height={52}
                      className="aspect-square object-contain"
                    />
                  </div>
                  <span>{data.name}</span>
                </div>
              </td>
              <td className="px-6 py-4 font-medium">{data.description}</td>
              <td className="px-6 py-7.5 flex items-center h-full gap-3 text-gray-600">
                <button className="cursor-pointer">
                  <FiEdit2 size={20} />
                </button>
                <button className="cursor-pointer">
                  <FiTrash2 size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryTable;
