import Image from "next/image";

export default function Header() 
{
  return (
      <div className="container mx-auto flex p-5 items-center justify-between">
        <Image className="ml-20"
          src="/images/Logo.png"
          alt="Logo images"
          width={154.49}
          height={24}
        />

        <ul className="flex flex-wrap gap-[50px] justify-between text-gray-600">
          <li>Home</li>
          <li>Service</li>
          <li>Feature</li>
          <li>Product</li>
          <li>Testimonial</li>
          <li>FAQ</li>
        </ul>
        <div className="mx-14">
          <button className="text-[#4CAF4F] bg-white px-4 py-2 rounded hover:bg-white">
            Login
          </button>
          <button className="text-white bg-[#4CAF4F] px-4 py-2 rounded hover:bg-[#45A049]">
            Sign up
          </button>
        </div>
      </div>
  );
}
