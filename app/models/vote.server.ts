import type { Vote } from "@prisma/client";

import { prisma } from "~/db.server";

export function getVote({
  id,
}: Pick<Vote, "id"> & {
  userId: Vote["id"];
}) {
  return prisma.vote.findFirst({
    where: { id },
  });
}

export function getVoteList() {
  return prisma.vote.findMany({
    where: {},
    select: {},
    orderBy: { updatedAt: "desc" },
  });
}

export function createVote(newVote: Vote) {
  return prisma.vote.create({
    data: newVote,
  });
}

export function deleteVote({ id }: Pick<Vote, "id">) {
  return prisma.vote.deleteMany({
    where: { id },
  });
}
