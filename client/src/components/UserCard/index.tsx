import { User } from "@/state/api";
import Image from "next/image";
import React from "react";

type Props = {
  user: User;
};

const UserCard = ({ user }: Props) => {
  return (
    <div className="flex items-center gap-4 rounded border p-4 shadow">
      {user.profilePictureUrl && (
        <Image
          src={`/p1.jpeg`}
          alt="profile picture"
          width={40}
          height={40}
          className="h-15 w-15 rounded-full"
        />
      )}
      <div className="text-lg font-semibold">
        <h3>{user.username}</h3>
        <p>{user.email}</p>
      </div>
    </div>
  );
};

export default UserCard;
