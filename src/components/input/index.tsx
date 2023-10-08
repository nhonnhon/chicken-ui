import * as React from "react";
import { Controller } from "react-hook-form";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText?: string;
  wrapperClass?: string;
  control?: any;
  defaultValue?: string | number;
  name: string;
  id?: string;
}

export const FormInput: React.FC<IProps> = ({
  placeholder,
  labelText,
  wrapperClass,
  type = "text",
  name,
  control,
  defaultValue,
  disabled = false,
  id,
}: IProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { ref, ...field }, fieldState: { error } }) => {
        return (
          <div className={wrapperClass}>
            <label className="block text-gray-700 font-bold mb-2" htmlFor={id}>
              {labelText}
            </label>
            <input
              disabled={disabled}
              className={`shadow appearance-none placeholder-gray-400 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-indigo-400 focus:outline-none ${
                disabled
                  ? "disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200"
                  : ""
              } ${error ? "border-red-500" : ""}`}
              id={id}
              type={type}
              placeholder={placeholder}
              {...field}
            />
          </div>
        );
      }}
    />
  );
};

FormInput.displayName = "FormInput";
