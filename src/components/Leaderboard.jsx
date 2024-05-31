import { useState } from "react";

export default function LeaderBoard({current, highScore}){
    return (
        <div className = "leaderboard">
            <div>Current Score: {current}</div>
            <div>High Score: {highScore}</div> 
        </div>
    )
}