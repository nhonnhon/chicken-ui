import Image from "next/image";
import Heading from "../heading";
import { formatCurrency } from "@/util/format-currency";
import { PlayCircleIcon } from "@heroicons/react/20/solid";
import React from "react";
import Button from "../button";
import { formatVideoLink } from "@/util/format-video-link";

interface IProps {
  id: number;
  headerText: string;
  imgUrl?: string;
  imgUrl2?: string;
  imgUrl3?: string;
  description: string;
  price: number;
  video1?: string;
  video2?: string;
  isPublicView?: boolean;
}

export const ChickenCard: React.FC<IProps> = ({
  id,
  headerText,
  imgUrl = "https://aws-chicken.s3.ap-southeast-1.amazonaws.com/3.jpg",
  imgUrl2,
  imgUrl3,
  description,
  price,
  video1,
  video2,
  isPublicView = false,
}) => {
  const [linkVideo, setLinkVideo] = React.useState<string>("");

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
      {imgUrl2 ? (
        <div className="mt-3">
          <div className="md:flex md:h-56 justify-center align-center">
            <Image
              className="mx-auto rounded"
              src={imgUrl2}
              alt={headerText}
              width={200}
              height={200}
            />
          </div>
        </div>
      ) : null}
      {imgUrl3 ? (
        <div className="mt-3">
          <div className="md:flex md:h-56 justify-center align-center">
            <Image
              className="mx-auto rounded"
              src={imgUrl3}
              alt={headerText}
              width={200}
              height={200}
            />
          </div>
        </div>
      ) : null}
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
      {video1 && isPublicView ? (
        <>
          <p className="text-base text-slate-900 md:text-base text-xl mb-1">
            Video 1
          </p>
          <iframe
            src={`https://player.vimeo.com/video/${formatVideoLink(video1)}`}
            width="640"
            height="564"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            className="w-full"
          ></iframe>
        </>
      ) : null}
      {video2 && isPublicView ? (
        <>
          <p className="text-base text-slate-900 md:text-base text-xl mb-1">
            Video 2
          </p>
          <iframe
            src={`https://player.vimeo.com/video/${formatVideoLink(video2)}`}
            width="640"
            height="564"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            className="w-full"
          ></iframe>
        </>
      ) : null}
      {/* This is for old implement with button to open video, new change, video will be open automatically */}
      {/* {video1 ? (
        <Button
          variant="outlined"
          onClick={() => {
            setLinkVideo(formatVideoLink(video1));
          }}
        >
          <PlayCircleIcon className="h-6 w-6 text-rose-500" />
          <span className="ml-1">Xem video 1</span>
        </Button>
      ) : null}
      <br />
      {video2 ? (
        <Button
          variant="outlined"
          onClick={() => {
            setLinkVideo(formatVideoLink(video2));
          }}
        >
          <PlayCircleIcon className="h-6 w-6 text-rose-500" />
          <span className="ml-1">Xem video 2</span>
        </Button>
      ) : null}
      {linkVideo && (
        <iframe
          src={`https://player.vimeo.com/video/${linkVideo}`}
          width="640"
          height="564"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          className="w-full"
        ></iframe>
      )} */}
    </>
  );
};
