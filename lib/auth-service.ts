import { currentUser } from "@clerk/nextjs";
import { db } from "@/lib/db";

export const getSelf = async () => {
  const self = await currentUser();

  if (!self || !self.username) {
    throw new Error("Unauthorized");
  }

  const user = await db.user.findUnique({
    where: {
      externalUserId: self.id,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

export const getSelfWithUsername = async (username: string) => {
  //For Creator Dashboard

  const self = await currentUser();

  if (!self || !self.username) {
    throw new Error("Unauthorized");
  }

  const user = await db.user.findUnique({
    where: {
      username: username,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  if (self.username !== user.username) {
    throw new Error("Unauthorized");
  }
  return user;
};
