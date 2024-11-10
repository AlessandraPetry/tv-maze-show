import Image from "next/image";
import noImage from "@/assets/img/noImage.jpg";

type CardProps = {
  description?: string;
  imageSrc?: string;
  title?: string;
};

export const CardInfos = ({ description, imageSrc, title }: CardProps) => {
  return (
    <div className="flex flex-col items-center bg-white border-l border-t border-[#efefef] rounded-3xl shadow-[2px_2px_40px_#dadada] p-16 w-full lg:flex-row lg:items-start">
      <Image
        className="dark:invert rounded-xl"
        src={imageSrc || noImage}
        alt=""
        width={200}
        height={200}
      />
      <div className="flex flex-col mt-6 lg:mx-10 lg:mt-0">
        <h1 className="font-bold mb-8 text-3xl dina-puff-font">{title}</h1>
        <p
          className="noto-sans-font"
          dangerouslySetInnerHTML={{ __html: description || "" }}
        />
      </div>
    </div>
  );
};
