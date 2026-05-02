"use client";
import { UpdateUserModal } from "@/component/UpdateProfileModal";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";

const ProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  return (
    <div>
      <Card className=" max-w-96 mx-auto flex flex-col items-center my-6 border border-gray-200">
        <Avatar className="w-20 h-20">
          <Avatar.Image
            alt="User name"
            src={user?.image}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
        </Avatar>
        <h2 className="text-xl font-bold">{user?.name}</h2>
        <p className="text-muted">{user?.email}</p>
        <UpdateUserModal/>
      </Card>
    </div>
  );
};

export default ProfilePage;
