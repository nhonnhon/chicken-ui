import * as React from "react";

import { MainLayout } from "@/layouts/main";
import Loading from "@/components/loading";
import { ChickenCard } from "@/components";
import { useGetAllChickenQuery } from "@/api/chicken/use-chicken-list";

export default function Homepage() {
  const { data, isFetching } = useGetAllChickenQuery({
    page: 1,
    perPage: 10,
  });

  if (isFetching) {
    return <Loading />;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 py-4">
      {data?.data.map((chicken) => (
        <ChickenCard
          key={chicken.id}
          id={chicken.id}
          headerText={chicken.name}
          description={chicken.description}
          imgUrl={chicken.photo1}
          price={chicken.price}
          video1={chicken.ytb_link}
          video2={chicken.tiktok_link}
        />
      ))}
    </div>
  );
}

Homepage.Layout = MainLayout;
