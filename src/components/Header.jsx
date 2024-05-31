import LeaderBoard from "./Leaderboard";

export default function Header({current, highScore}){
    return (
        <div className = "header">
            <div>Welcome to MemoryCard: <img src = 'src\assets\Naruto_logo.png'width = "100"/> Edition!</div>
            <LeaderBoard current = {current} highScore={highScore}/>
        </div>
    )
}