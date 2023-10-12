import Image from "next/image";
import * as React from "react";
import { Controller } from "react-hook-form";
import Button from "../button";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
  onUploadImage?: (arg?: File) => void;
}

export const FormUpload: React.FC<IProps> = ({
  labelText,
  onUploadImage = () => {},
}: IProps) => {
  const [image, setImage] = React.useState<any>();

  const handleChange = (e: any) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div>
      <div className="grid grid-cols-2">
        <div>
          <label className="block text-gray-700 font-bold mb-2">
            {labelText}
          </label>
          <input type="file" accept={"image/*"} onChange={handleChange} />
        </div>
        <Image src={image} alt="" width={100} height={100} />
      </div>
      <Button
        type="button"
        variant="contained"
        color="danger"
        text="Lưu hình"
      />
    </div>
  );
};

FormUpload.displayName = "FormUpload";
