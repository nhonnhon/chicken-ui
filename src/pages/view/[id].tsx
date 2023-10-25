import { useGetChickenDetailQuery } from "@/api/chicken/use-chicken-detail";
import { ChickenCard } from "@/components";
import Loading from "@/components/loading";
import { ROUTES } from "@/configs/routes.config";
import { MainLayout } from "@/layouts/main";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ChickenDetailView() {
  const router = useRouter();
  const id = router.query.id as unknown as number;

  const { data: chicken, isFetching, isError } = useGetChickenDetailQuery(id);

  if (isFetching) {
    return <Loading />;
  }

  if (isError) {
    <div className="flex items-center justify-center mt-4">
      <p>Có lỗi xảy ra. Thử lại sau</p>
      <Link
        href={ROUTES.HOME}
        className="text-md font-normal text-yellow-600 underline pr-4 inline-block mt-2"
      >
        Trở về trang chính
      </Link>
    </div>;
  }

  return (
    <div className="mt-4 mb-4">
      <Link
        href={ROUTES.HOME}
        className="text-md font-normal text-yellow-600 underline pr-4 inline-block mt-2 mb-4"
      >
        Trở về trang chính
      </Link>
      <div className="text-center border-solid border border-sky-500 rounded p-3">
        <ChickenCard
          id={chicken?.id || 0}
          headerText={chicken?.name || ""}
          description={chicken?.description || ""}
          imgUrl={chicken?.photo1}
          imgUrl2={chicken?.photo2}
          imgUrl3={chicken?.photo3}
          price={chicken?.price || 1000000}
          video1={chicken?.ytb_link}
          video2={chicken?.tiktok_link}
          isPublicView={true}
        />
      </div>
    </div>
  );
}

ChickenDetailView.Layout = MainLayout;
