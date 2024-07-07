import "./Card.css";
import TeamCard from "./TeamCard";

export default function Home({ teamsList }) {
  return (
    <div className="card">
      {teamsList.map((teamData) => (
        <TeamCard
          key={teamData.team.id}
          name={teamData.team.name}
          founded={teamData.team.founded}
          logo={teamData.team.logo}
          stadium={teamData.venue.name}
        />
      ))}
    </div>
  );
}
