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
    <div>
      {voteList.map((vote) => (
        <VoteCard key={vote.id} vote={vote} />
      ))}
    </div>
  );
}
