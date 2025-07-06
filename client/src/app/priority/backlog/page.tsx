import React from "react";
import ReuseablePriorityPage from "../reusablePriorityPage";
import { Priority } from "@/state/api";

const Backlog = () => {
  return <ReuseablePriorityPage priority={Priority.Backlog} />;
};

export default Backlog;
