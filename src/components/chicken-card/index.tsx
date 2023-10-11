import Image from "next/image";
import Heading from "../heading";

interface IProps {
  headerText: string;
  imgUrl?: string;
  description: string;
  price: number;
}

export const ChickenCard: React.FC<IProps> = ({
  headerText,
  imgUrl = "https://aws-chicken.s3.ap-southeast-1.amazonaws.com/3.jpg",
  description,
  price,
}) => {
  return (
    <div className="border-solid border border-sky-500 rounded">
      <Image
        className="mx-auto"
        src={imgUrl}
        alt={headerText}
        width={100}
        height={100}
      />
      <Heading text={headerText} />

      <p className="text-base text-slate-500 sm:text-base">{description}</p>
      {price ? (
        <p className="text-base font-bold text-primary-500">{price}</p>
      ) : null}
    </div>
  );
};
