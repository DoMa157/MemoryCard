import LeaderBoard from "./Leaderboard";
import logo from '../assets/Naruto_logo.png';

export default function Header({current, highScore}){
    return (
        <div className = "header">
            <div>Welcome to MemoryCard: <img src = {logo} width = "100"/> Edition!</div>
            <LeaderBoard current = {current} highScore={highScore}/>
        </div>
    )
}