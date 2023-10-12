import { FormInput, FormUpload } from "@/components";
import Heading from "@/components/heading";
import { useForm } from "react-hook-form";

interface IProps {
  isEdit?: boolean;
}

export const ChickenForm: React.FC<IProps> = ({ isEdit = false }) => {
  const { control, handleSubmit } = useForm();

  const onSubmit = async () => {
    //
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
            defaultValue={""}
            placeholder="Tên"
            control={control}
            labelText="Nhập tên"
          />
        </div>
        <div className="mb-4">
          <FormInput
            name="description"
            defaultValue={""}
            placeholder="Mô tả"
            control={control}
            labelText="Mô tả"
          />
        </div>
        <div className="mb-6">
          <FormUpload labelText="Photo 1" />
        </div>
        <div className="mb-6">
          <FormInput
            name="ytb_link"
            defaultValue={""}
            placeholder="Nhập link"
            control={control}
            labelText="Link video 1"
          />
        </div>
        <div className="mb-6">
          <FormInput
            name="tiktok_link"
            defaultValue={""}
            placeholder="Nhập link"
            control={control}
            labelText="Link video 2"
          />
        </div>
      </form>
    </div>
  );
};

ChickenForm.displayName = "ChickenForm";
