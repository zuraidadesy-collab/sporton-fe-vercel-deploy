import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import { Category } from "@/app/types";
import { getImageUrl } from "@/app/lib/api";

const categoriesList = [
  {
    name: "Running",
    imgUrl: "category-running.png",
  },
  // {
  //   name: "Tennis",
  //   imgUrl: "category-tennis.png",
  // },
  // {
  //   name: "Basketball",
  //   imgUrl: "category-basketball.png",
  // },
  // {
  //   name: "Football",
  //   imgUrl: "category-football.png",
  // },
  // {
  //   name: "Badminton",
  //   imgUrl: "category-badminton.png",
  // },
  // {
  //   name: "Swimming",
  //   imgUrl: "category-swimming.png",
  // },
];

type TCategoriesProps = {
  categories: Category[];
};

const CategoriesSection = ({ categories }: TCategoriesProps) => {
  return (
    <section id="categories-section" className="container mx-auto pb-20">
      <div className="flex justify-between">
        <h2 className="font-bold text-2xl">Browse By Categories</h2>
        <Link href="#" className="flex gap-2 text-primary font-medium">
          See All Categories
          <FiArrowRight className="self-center" />
        </Link>
      </div>
      <div className="grid grid-cols-6 gap-12 mt-8">
        {categories.map((category) => (
          <div
            key={category._id}
            className="rounded-lg bg-gradient-to-r from-[#F1F1F1] to-[#F7F7F7] w-full aspect-square flex justify-center"
          >
            <div className="self-center">
              <Image
                src={getImageUrl(category.imageUrl)}
                alt={category.name}
                width={86}
                height="86"
                className="mb-[10px]"
              />
              <div className="text-primary font-medium text-xl text-center">
                {category.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
