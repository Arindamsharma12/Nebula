import React from "react";
import ReuseablePriorityPage from "../reusablePriorityPage";
import { Priority } from "@/state/api";

const Medium = () => {
  return <ReuseablePriorityPage priority={Priority.Medium} />;
};

export default Medium;
