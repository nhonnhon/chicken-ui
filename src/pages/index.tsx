import * as React from "react";

import { MainLayout } from "@/layouts/main";
import { ChickenList } from "@/features/chicken-list";
import Logo from "@/assets/images/logo.png";
import Image from "next/image";

export default function Homepage() {
  return (
    <div className="pt-2">
      <div className="flex justify-between align-center">
        <Image
          className="mx-auto"
          src={Logo}
          alt={"Logo"}
          width={80}
          height={80}
        />
      </div>
      <p className="text-center text-sm mt-2 text-purple-700 text-bold">
        Chào mừng các bạn đến với website gà &#128019;. Đây là nơi mình đăng tải
        gà lên. Các bạn có thể xem/tham khảo dánh sách gà với đầy đủ hình ảnh,
        giá, mô tả về gà và cũng có thể xem video của từng chiến kê trên
        website.
      </p>
      <p className="text-center text-md mt-2 text-red-500 text-bold">
        Liên hệ: &#128222; 0123456789 - để ép giá &#129512;
      </p>
      <ChickenList isAdmin={false} />
    </div>
  );
}

Homepage.Layout = MainLayout;
