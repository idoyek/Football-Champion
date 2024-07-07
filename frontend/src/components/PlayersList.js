import "./Card.css";
import PlayerCard from "./PlayerCard";

export default function PlayersList({ playersList }) {
  return (
    <div className="card">
      {playersList.map((player) => (
        <PlayerCard
          key={player.id}
          name={player.name}
          age={player.age}
          number={player.number}
          position={player.position}
          photo={player.photo}
        />
      ))}
    </div>
  );
}
