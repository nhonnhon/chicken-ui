import { useUploadMutation } from "@/api/upload/use-upload-mutation";
import { FormInput, FormUpload } from "@/components";
import Button from "@/components/button";
import Heading from "@/components/heading";
import { IChickenInformation } from "@/pages/chicken/type";
import { SubmitHandler, useForm } from "react-hook-form";

interface IProps {
  isEdit?: boolean;
  formDefaultValues: IChickenInformation;
}

export const ChickenForm: React.FC<IProps> = ({
  isEdit = false,
  formDefaultValues,
}) => {
  const { mutate: uploadNewImage, isLoading } = useUploadMutation();
  console.log(
    "🚀 ~ file: index.tsx:15 ~ formDefaultValues:",
    formDefaultValues
  );
  const { control, handleSubmit, setValue } = useForm<IChickenInformation>({
    defaultValues: formDefaultValues,
  });

  const onSubmit: SubmitHandler<IChickenInformation> = async (formValues) => {
    console.log("🚀 ~ file: index.tsx:24 ~ onSubmit ~ formValues:", formValues);
    //
  };

  const onUploadImage = (file: File, id: string) => {
    console.log("🚀 ~ file: index.tsx:32 ~ onUploadImage ~ file:", file);
    if (file) {
      uploadNewImage(file, {
        onSuccess: (data) => {
          console.log("🚀 ~ file: index.tsx:35 ~ onUploadImage ~ data:", data);
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
            type="number"
            placeholder="Giá"
            control={control}
            labelText="Giá"
          />
        </div>
        <div className="mb-6">
          <FormUpload
            labelText="Photo 1"
            onUploadImage={(file: File) => onUploadImage(file, "photo1")}
          />
        </div>
        <div className="mb-6">
          <FormUpload
            labelText="Photo 2"
            onUploadImage={(file: File) => onUploadImage(file, "photo2")}
          />
        </div>
        <div className="mb-6">
          <FormUpload
            labelText="Photo 3"
            onUploadImage={(file: File) => onUploadImage(file, "photo3")}
          />
        </div>
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
