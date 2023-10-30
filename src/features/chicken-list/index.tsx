import { useDeleteChickenMutation } from "@/api/chicken/use-chicken-delete.mutation";
import { useGetAllChickenQuery } from "@/api/chicken/use-chicken-list";
import { useUpdateChickenStatusMutation } from "@/api/chicken/use-chicken-update.mutation";
import { ChickenCard } from "@/components";
import Button from "@/components/button";
import Loading from "@/components/loading";
import Pagination from "@/components/pagination";
import { StatusEnum } from "@/configs/constant.config";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

interface IProps {
  isAdmin?: boolean;
}

export const ChickenList: React.FC<IProps> = ({ isAdmin }) => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);

  const {
    data,
    isFetching,
    refetch: refetchList,
  } = useGetAllChickenQuery({
    page: currentPage,
    perPage: 5,
  });

  const { mutateAsync: deleteChickenAPI } = useDeleteChickenMutation();
  const { mutateAsync: updateChickenAPI } = useUpdateChickenStatusMutation();

  const onSold = async (id: number) => {
    try {
      await updateChickenAPI({
        id,
        status: StatusEnum.SOLD,
      });
      refetchList();
    } catch (error) {
      alert("Đã có lỗi xảy ra, thử lại sau");
    }
  };

  const onDelete = async (id: number) => {
    try {
      await deleteChickenAPI(id);
      refetchList();
    } catch (error) {
      alert("Đã có lỗi xảy ra, thử lại sau");
    }
  };

  if (isFetching) {
    return <Loading />;
  }

  const youtube = data?.data?.find((c) => c.id === 1)?.ytb_link;

  return (
    <div className="py-4">
      <div className="flex justify-center">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${youtube}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
      {isAdmin ? (
        <div className="flex justify-between align-center">
          <Link
            href={`/chicken/add`}
            className="text-lg font-normal text-yellow-500 underline pr-4"
          >
            Thêm mới
          </Link>
          <Button
            variant="contained"
            text="Đăng xuất"
            onClick={() => signOut()}
          />
        </div>
      ) : null}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 pt-4">
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
              <div className="flex items-center justify-center mt-3 space-x-4">
                <Link
                  href={`/chicken/${chicken.id}`}
                  className="text-md font-normal text-yellow-600 underline pr-4"
                >
                  Sửa
                </Link>
                <Button
                  type="button"
                  variant="contained"
                  color="danger"
                  text="Xóa"
                  onClick={() => onDelete(chicken.id)}
                />
                <Button
                  type="button"
                  variant="outlined"
                  color="success"
                  text="Đã bán"
                  onClick={() => onSold(chicken.id)}
                />
              </div>
            ) : (
              <Link
                href={`/view/${chicken.id}`}
                className="text-lg font-normal text-yellow-500 underline pr-4"
              >
                Xêm thêm hình và video
              </Link>
            )}
          </div>
        ))}
      </div>
      <Pagination
        visible={!isFetching}
        className="mt-4 justify-center"
        totalItems={data?.itemCount || 1}
        currentPage={data?.paginationDto?.page}
        itemPerPage={data?.paginationDto?.perPage}
        onChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

ChickenList.displayName = "ChickenListAdmin";
