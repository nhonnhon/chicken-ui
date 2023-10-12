import { useGetChickenDetailQuery } from "@/api/chicken/use-chicken-detail";
import Loading from "@/components/loading";
import NotFound from "@/components/not-found";
import { ROUTES } from "@/configs/routes.config";
import { MainLayout } from "@/layouts/main";
import { ChevronDoubleLeftIcon } from "@heroicons/react/20/solid";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ChickenDetail() {
  const router = useRouter();
  const id = router.query.id as unknown as number;

  const { data, isFetching, isError } = useGetChickenDetailQuery(id);

  const renderBackToList = () => {
    return (
      <Link
        href={ROUTES.DASHBOARD}
        className="text-md font-normal text-yellow-600 underline pr-4 inline-block mt-2"
      >
        Trở về trang chính
      </Link>
    );
  };

  if (isFetching) {
    return <Loading />;
  }

  if (isError) {
    <>
      {renderBackToList()}
      <NotFound />
    </>;
  }

  return <>{renderBackToList()}</>;
}

ChickenDetail.Layout = MainLayout;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  if (session == null) {
    return {
      redirect: {
        destination: ROUTES.LOGIN,
        permanent: true,
      },
    };
  }

  return {
    props: {},
  };
};
