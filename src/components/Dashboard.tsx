import { useState } from "react";
import MetricCard from "./MetricCard";
import { useSimulation } from "../hooks/useSimulation";

export default function Dashboard() {
  const simulation = useSimulation();

  const [state, setState] = useState(simulation.getState());

  const handleNextWeek = () => {
    const newState = simulation.nextWeek();

    setState(newState);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>AI System Dynamics Demo</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 250px)",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <MetricCard title="Week" value={state.week} />

        <MetricCard title="Motivation" value={state.motivation} />

        <MetricCard title="Skill" value={state.skill} />

        <MetricCard title="Productivity" value={state.productivity} />

        <MetricCard title="Progress" value={state.progress} />

        <MetricCard
          title="Customer Satisfaction"
          value={state.customerSatisfaction}
        />

        <MetricCard title="Burnout" value={state.burnout} />

        <MetricCard title="Budget" value={state.budget} />
      </div>

      <button
        onClick={handleNextWeek}
        style={{
          marginTop: "30px",
          padding: "12px 20px",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        Next Week
      </button>
    </div>
  );
}
