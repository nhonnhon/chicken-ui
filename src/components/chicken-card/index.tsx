import Image from "next/image";
import Heading from "../heading";
import { formatCurrency } from "@/util/format-currency";
import { PlayCircleIcon } from "@heroicons/react/20/solid";

interface IProps {
  id: number;
  headerText: string;
  imgUrl?: string;
  description: string;
  price: number;
  video1?: string;
  video2?: string;
}

export const ChickenCard: React.FC<IProps> = ({
  id,
  headerText,
  imgUrl = "https://aws-chicken.s3.ap-southeast-1.amazonaws.com/3.jpg",
  description,
  price,
  video1,
  video2,
}) => {
  return (
    <>
      <div className="md:flex md:h-56 justify-center align-center">
        <Image
          className="mx-auto rounded"
          src={imgUrl}
          alt={headerText}
          width={200}
          height={200}
        />
      </div>
      <Heading
        text={`#${id} - ${headerText}`}
        className="mt-2 text-lg leading-5 text-red-500 uppercase text-2xl mb-1"
      />

      <p className="text-base text-slate-900 md:text-base text-xl mb-1">
        {description}
      </p>
      <p className="text-base text-primary-500 text-xl my-2">
        Giá:
        <span className="ml-1 text-green-500">
          {price ? formatCurrency("vn-VN", price) : "--"}{" "}
        </span>
      </p>
      {video1 ? (
        <a
          target="_blank"
          href="https://vimeo.com/872775502?share=copy"
          rel="noopener noreferrer"
          className="flex justify-center"
        >
          <PlayCircleIcon className="h-6 w-6 text-rose-500" />
          <span className="ml-1">Xem video 1</span>
        </a>
      ) : null}
      {video2 ? (
        <a
          target="_blank"
          href="https://vimeo.com/872775502?share=copy"
          rel="noopener noreferrer"
          className="flex justify-center"
        >
          <PlayCircleIcon className="h-6 w-6 text-rose-500" />
          <span className="ml-1">Xem video 2</span>
        </a>
      ) : null}
    </>
  );
};
