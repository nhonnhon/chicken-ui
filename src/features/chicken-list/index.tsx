import { useGetAllChickenQuery } from "@/api/chicken/use-chicken-list";
import { ChickenCard } from "@/components";
import Button from "@/components/button";
import Loading from "@/components/loading";
import Pagination from "@/components/pagination";
import Link from "next/link";

interface IProps {
  isAdmin?: boolean;
}

export const ChickenList: React.FC<IProps> = ({ isAdmin }) => {
  const { data, isFetching } = useGetAllChickenQuery({
    page: 1,
    perPage: 10,
  });

  if (isFetching) {
    return <Loading />;
  }

  return (
    <div className=" py-4">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {data?.data.map((chicken) => (
          <div
            className="text-center border-solid border border-sky-500 rounded p-3"
            key={chicken.id}
          >
            <ChickenCard
              id={chicken.id}
              headerText={chicken.name}
              description={chicken.description}
              imgUrl={chicken.photo1}
              price={chicken.price}
              video1={chicken.ytb_link}
              video2={chicken.tiktok_link}
            />
            {isAdmin ? (
              <div className="flex items-center justify-center mt-3">
                <Link
                  href={`/chicken/${chicken.id}`}
                  className="text-md font-normal text-yellow-600 underline pr-4"
                >
                  Edit
                </Link>
                <Button
                  type="button"
                  variant="contained"
                  color="danger"
                  text="Delete"
                />
              </div>
            ) : null}
          </div>
        ))}
      </div>
      <Pagination
        visible={!isFetching}
        className="mt-4 justify-center"
        totalItems={data?.itemCount || 1}
        currentPage={data?.paginationDto?.page}
        itemPerPage={data?.paginationDto?.perPage}
        // onChange={page => comboBuilderState.accommodationSetFilter({page})}
      />
    </div>
  );
};

ChickenList.displayName = "ChickenListAdmin";
