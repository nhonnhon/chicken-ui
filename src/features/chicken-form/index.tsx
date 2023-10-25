import { useUploadMutation } from "@/api/upload/use-upload-mutation";
import { FormInput, FormUpload } from "@/components";
import Button from "@/components/button";
import Heading from "@/components/heading";
import { IChickenInformation } from "@/common/type";
import { SubmitHandler, useForm } from "react-hook-form";
import { chickenFormSchema } from "./chicken-schema";
import { useCreateChickenMutation } from "@/api/chicken/use-chicken-create.mutation";
import { useRouter } from "next/router";
import { ROUTES } from "@/configs/routes.config";
import { useUpdateChickenMutation } from "@/api/chicken/use-chicken-update.mutation";
import { useParams } from "next/navigation";
import { useState } from "react";

interface IProps {
  isEdit?: boolean;
  formDefaultValues: IChickenInformation;
}

export const ChickenForm: React.FC<IProps> = ({
  isEdit = false,
  formDefaultValues,
}) => {
  const router = useRouter();
  const params = useParams();

  const [successUpload, setSuccessUpload] = useState<
    Record<string, boolean> | undefined
  >();

  const { mutate: uploadNewImage } = useUploadMutation();
  const { mutate: createChicken } = useCreateChickenMutation();
  const { mutate: updateChicken } = useUpdateChickenMutation();

  const { control, handleSubmit, setValue } = useForm<IChickenInformation>({
    defaultValues: formDefaultValues,
    resolver: chickenFormSchema(),
  });

  const onSubmit: SubmitHandler<IChickenInformation> = async (formValues) => {
    if (formValues.price) {
      const numberPrice = parseInt(formValues.price as string);
      formValues.price = numberPrice;
    }
    try {
      if (isEdit) {
        updateChicken(
          { ...formValues, id: params.id as unknown as number },
          {
            onSuccess: () => {
              router.push(ROUTES.DASHBOARD);
            },
          }
        );
      } else {
        createChicken(formValues, {
          onSuccess: () => {
            router.push(ROUTES.DASHBOARD);
          },
        });
      }
    } catch (error) {
      alert("Đã có lỗi xảy ra, thử lại sau");
    }
  };

  const onUploadImage = (file: File, id: "photo1" | "photo2" | "photo3") => {
    if (file) {
      uploadNewImage(file, {
        onSuccess: (data) => {
          const linkPhoto = `${process.env.AWS_S3_ENDPOINT}${data.data?.key}`;
          setValue(id, linkPhoto);
          setSuccessUpload({
            ...successUpload,
            [id]: true,
          });
        },
      });
    }
  };

  return (
    <div className="w-full">
      <Heading
        text={isEdit ? "Chỉnh sửa thông tin" : "Thêm mới"}
        className="mt-6 leading-5 text-red-500 text-center uppercase text-2xl"
      />
      <form className="pt-2 pb-6 mb-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <FormInput
            name="name"
            placeholder="Tên"
            control={control}
            labelText="Nhập tên"
          />
        </div>
        <div className="mb-4">
          <FormInput
            name="description"
            placeholder="Mô tả"
            control={control}
            labelText="Mô tả"
          />
        </div>
        <div className="mb-4">
          <FormInput
            name="price"
            placeholder="Giá"
            control={control}
            labelText="Giá"
          />
        </div>
        {!isEdit && (
          <>
            <div className="mb-6">
              <FormUpload
                labelText="Photo 1"
                onUploadImage={(file: File) => onUploadImage(file, "photo1")}
                uploadDone={successUpload?.photo1 === true}
              />
            </div>
            <div className="mb-6">
              <FormUpload
                labelText="Photo 2"
                onUploadImage={(file: File) => onUploadImage(file, "photo2")}
                uploadDone={successUpload?.photo2 === true}
              />
            </div>
            <div className="mb-6">
              <FormUpload
                labelText="Photo 3"
                onUploadImage={(file: File) => onUploadImage(file, "photo3")}
                uploadDone={successUpload?.photo2 === true}
              />
            </div>
          </>
        )}
        <div className="mb-6">
          <FormInput
            name="ytb_link"
            placeholder="Nhập link"
            control={control}
            labelText="Link video 1"
          />
        </div>
        <div className="mb-6">
          <FormInput
            name="tiktok_link"
            placeholder="Nhập link"
            control={control}
            labelText="Link video 2"
          />
        </div>
        <Button type="submit" variant="contained" text="Lưu" />
      </form>
    </div>
  );
};

ChickenForm.displayName = "ChickenForm";
