import React from "react";
import ReuseablePriorityPage from "../reusablePriorityPage";
import { Priority } from "@/state/api";

const Low = () => {
  return <ReuseablePriorityPage priority={Priority.Low} />;
};

export default Low;
