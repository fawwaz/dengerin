import React from "react";
import { PlayArrow, SkipNext } from "@material-ui/icons";
import ProgressBar from "../ProgressBar/ProgressBar";

function Player(props) {
  const { title, artist } = props;
  return (
    <div>
      <ProgressBar percentage={55} />
      <div className="flex bg-pink-500 text-white">
        <div className="flex-1  py-2 px-4">
          <div className="text-lg font-bold">{title}</div>
          <div className="text-sm">{artist}</div>
        </div>
        <div>
          <button className="px-4 h-full">
            <PlayArrow fontSize="large" />
          </button>
          <button className="px-4 h-full">
            <SkipNext fontSize="large" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
