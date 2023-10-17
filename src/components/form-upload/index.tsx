import Image from "next/image";
import * as React from "react";
import { Controller } from "react-hook-form";
import Button from "../button";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
  onUploadImage: (file: File) => void;
}

export const FormUpload: React.FC<IProps> = ({
  labelText,
  onUploadImage,
}: IProps) => {
  const [imagePreview, setImagePreview] = React.useState<string | null>(null);
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] as File;
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const onSaveImage = () => {
    if (selectedFile) {
      onUploadImage(selectedFile);
    }
  };

  return (
    <div className="border-b pb-2">
      <div className="grid grid-cols-2 gap-4 pb-2">
        <div className="overflow-hidden">
          <label className="block text-gray-700 font-bold mb-2">
            {labelText}
          </label>
          <input type="file" accept={"image/*"} onChange={handleChange} />
        </div>
        {imagePreview ? (
          <Image src={imagePreview} alt="" width={100} height={100} />
        ) : null}
      </div>
      {imagePreview ? (
        <Button
          type="button"
          variant="contained"
          color="danger"
          text="Lưu hình"
          onClick={onSaveImage}
        />
      ) : null}
    </div>
  );
};

FormUpload.displayName = "FormUpload";
