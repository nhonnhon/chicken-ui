import { useGetChickenDetailQuery } from "@/api/chicken/use-chicken-detail";
import { TopAdmin } from "@/components";
import Loading from "@/components/loading";
import NotFound from "@/components/not-found";
import { ROUTES } from "@/configs/routes.config";
import { ChickenForm } from "@/features/chicken-form";
import { MainLayout } from "@/layouts/main";
import { ChevronDoubleLeftIcon } from "@heroicons/react/20/solid";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ChickenAddNew() {
  const formDefaultValues = {
    name: "",
    description: "",
    price: undefined,
    photo1: "",
    photo2: "",
    photo3: "",
    ytb_link: "",
    tiktok_link: "",
  };

  return (
    <>
      <TopAdmin />
      <ChickenForm formDefaultValues={formDefaultValues} />
    </>
  );
}

ChickenAddNew.Layout = MainLayout;

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
