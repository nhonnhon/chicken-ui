import * as React from "react";

import { useGetChickenDetailQuery } from "@/api/chicken/use-chicken-detail";
import Loading from "@/components/loading";
import NotFound from "@/components/not-found";
import { ROUTES } from "@/configs/routes.config";
import { ChickenForm } from "@/features/chicken-form";
import { MainLayout } from "@/layouts/main";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { IChickenInformation } from "../../common/type";
import { TopAdmin } from "@/components";

export default function ChickenDetail() {
  const router = useRouter();
  const id = router.query.id as unknown as number;

  const { data, isFetching, isError } = useGetChickenDetailQuery(id);

  const formDefaultValues: IChickenInformation = React.useMemo(() => {
    return {
      name: data?.name || "",
      description: data?.description || "",
      price: data?.price,
      photo1: data?.photo1 || "",
      photo2: data?.photo2 || "",
      photo3: data?.photo3 || "",
      ytb_link: data?.ytb_link || "",
      tiktok_link: data?.tiktok_link || "",
    };
  }, [data]);

  if (isFetching) {
    return <Loading />;
  }

  if (isError) {
    <>
      <TopAdmin />
      <NotFound />
    </>;
  }

  return (
    <>
      <TopAdmin />
      <ChickenForm isEdit={true} formDefaultValues={formDefaultValues} />
    </>
  );
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
