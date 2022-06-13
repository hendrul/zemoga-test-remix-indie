import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import VoteCard from "~/components/VoteCard";
import { getVoteList } from "~/models/vote.server";

type LoaderData = {
  voteList: Awaited<ReturnType<typeof getVoteList>>;
};

export const loader: LoaderFunction = async () => {
  const voteList = await getVoteList();
  return json<LoaderData>({ voteList });
};

export default function Index() {
  const { voteList } = useLoaderData() as LoaderData;
  return (
    <div className="flex overflow-hidden">
      {voteList.map((vote) => (
        <VoteCard
          key={vote.id}
          className="max-h-72 shrink-0 grow-0 basis-72"
          vote={vote}
        />
      ))}
    </div>
  );
}
