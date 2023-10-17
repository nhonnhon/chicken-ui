import * as React from "react";

import { MainLayout } from "@/layouts/main";
import { ChickenList } from "@/features/chicken-list";

export default function Homepage() {
  return <ChickenList isAdmin={false} />;
}

Homepage.Layout = MainLayout;
