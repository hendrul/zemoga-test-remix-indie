import React from "react";

import type { Vote } from "@prisma/client";

export interface VoteCardProps {
  vote: Vote;
}

const VoteCard: React.FC<VoteCardProps> = (props) => {
  const { vote } = props;
  return <div>{vote.name}</div>;
};

export default VoteCard;
