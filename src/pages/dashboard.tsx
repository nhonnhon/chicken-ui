import { GetServerSideProps } from "next";
import { getSession, signOut } from "next-auth/react";
import * as React from "react";

import { ROUTES } from "@/configs/routes.config";
import { MainLayout } from "@/layouts/main";
import Button from "@/components/button";
import { useGetAllChickenQuery } from "@/api/chicken/use-chicken-list";
import { ChickenCard } from "@/components";
import Loading from "@/components/loading";

export default function Dashboard() {
  const { data, isFetching } = useGetAllChickenQuery({
    page: 1,
    perPage: 10,
  });
  console.log("🚀 ~ file: dashboard.tsx:15 ~ Dashboard ~ data:", data);

  if (isFetching) {
    return <Loading />;
  }

  return (
    <div className="grid grid-cols-2 gap-4 pt-4">
      {data?.data.map((chicken) => (
        <ChickenCard
          key={chicken.id}
          headerText={chicken.name}
          description={chicken.description}
          // imgUrl={chicken.photo1}
          price={chicken.price}
        />
      ))}
    </div>
  );
}

Dashboard.Layout = MainLayout;

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
