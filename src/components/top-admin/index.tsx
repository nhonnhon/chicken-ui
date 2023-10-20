import { ROUTES } from "@/configs/routes.config";
import Link from "next/link";
import React from "react";
import Button from "../button";
import { signOut } from "next-auth/react";

export const TopAdmin = () => {
  return (
    <div className="flex justify-between mt-4">
      <Link
        href={ROUTES.DASHBOARD}
        className="text-md font-normal text-yellow-600 underline pr-4 inline-block mt-2"
      >
        Trở về trang chính
      </Link>
      <Button variant="contained" text="Đăng xuất" onClick={() => signOut()} />
    </div>
  );
};

TopAdmin.displayName = "TopAdmin";
