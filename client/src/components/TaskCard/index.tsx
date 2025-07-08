"use client";

import { Task } from "@/state/api";
import { format } from "date-fns";
import Image from "next/image";
import React from "react";
import {
  FileImage,
  Hash,
  CalendarDays,
  ClipboardList,
  Tag,
  Flag,
  UserCircle,
  UserPlus,
  File,
} from "lucide-react";

type Props = {
  task: Task;
};

const TaskCard = ({ task }: Props) => {
  return (
    <div className="mb-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-md transition-all dark:border-gray-700 dark:bg-[#1d1f21] dark:text-white">
      {/* Attachments */}
      {task.attachments && task.attachments?.length > 0 && (
        <div className="mb-4">
          <div className="mb-2 flex items-center gap-2 text-sm font-medium">
            <FileImage size={18} />
            <span>Attachment</span>
          </div>
          <div className="overflow-hidden rounded">
            <Image
              src={`/${task.attachments[0].fileURL}`}
              alt={task.attachments[0].fileName}
              width={500}
              height={300}
              className="rounded-md object-cover"
            />
          </div>
        </div>
      )}

      {/* Task Details */}
      <div className="space-y-3 text-sm">
        <div className="flex items-center gap-2">
          <Hash size={18} />
          <span>
            <strong>ID:</strong> {task.id}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <ClipboardList size={18} />
          <span>
            <strong>Title:</strong> {task.title}
          </span>
        </div>

        <div className="flex items-start gap-2">
          <File size={18} />
          <span>
            <strong>Description:</strong>{" "}
            {task.description || "No description provided"}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Flag size={18} />
          <span>
            <strong>Status:</strong> {task.status}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Flag size={18} />
          <span>
            <strong>Priority:</strong> {task.priority}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Tag size={18} />
          <span>
            <strong>Tags:</strong> {task.tags || "No tags"}
          </span>
        </div>

        {/* Dates */}
        <div className="flex items-center gap-2">
          <CalendarDays size={18} />
          <span>
            <strong>Start:</strong>{" "}
            {task.startDate ? format(new Date(task.startDate), "P") : "Not set"}
          </span>
          <span className="ml-4">
            <strong>Due:</strong>{" "}
            {task.dueDate ? format(new Date(task.dueDate), "P") : "Not set"}
          </span>
        </div>

        {/* Users */}
        <div className="flex items-center gap-2">
          <UserCircle size={18} />
          <span>
            <strong>Author:</strong>{" "}
            {task.author ? task.author.username : "Unknown"}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <UserPlus size={18} />
          <span>
            <strong>Assignee:</strong>{" "}
            {task.assignee ? task.assignee.username : "Unassigned"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
