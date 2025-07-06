import React from "react";
import ReuseablePriorityPage from "../reusablePriorityPage";
import { Priority } from "@/state/api";

const High = () => {
  return <ReuseablePriorityPage priority={Priority.High} />;
};

export default High;
