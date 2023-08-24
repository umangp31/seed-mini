import { utils } from "ethers";
import React from "react";
import IdeaCard from "./IdeaCard";

function Container({ data }) {
  console.log(data);
  if (data) {
    return (
      <div className="text-white ml-8 flex-1">
        {data.map((idea, index) => {
          return (
            <IdeaCard
              owner={idea?.owner}
              title={idea?.title}
              description={idea?.description}
              target={idea?.target}
              date={idea?.deadline}
              amountCollected={idea?.amountCollected}
              imgLink={idea?.image}
              index={index}
            />
          );
        })}
      </div>
    );
  }
  return (
    <div className="text-white ml-8 flex-1">
      {/* {JSON.stringify(data)} */}
      <IdeaCard />
      <IdeaCard />
      <IdeaCard />
      <IdeaCard />
      <IdeaCard />
    </div>
  );
}

export default Container;
