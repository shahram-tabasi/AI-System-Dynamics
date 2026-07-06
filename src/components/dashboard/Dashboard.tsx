// src/components/dashboard/Dashboard.tsx

import { useState } from "react";

import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";

import MetricCard from "./MetricCard";
import { useSimulation } from "../../hooks/useSimulation";

export default function Dashboard() {
  const simulation = useSimulation();

  const [state, setState] = useState(simulation.getState());

  const [loading, setLoading] = useState(false);

  const [comment, setComment] = useState(
    "Click 'AI Next Week' to let AI manage the company.",
  );

  const [confidence, setConfidence] = useState(0);

  const handleNextWeek = async () => {
    setLoading(true);

    try {
      const result = await simulation.nextWeek();

      setState(result.state);

      setComment(result.ai.comment);

      setConfidence(result.ai.confidence);
    } catch (err) {
      console.error(err);

      setComment("Unable to contact OpenAI.");

      setConfidence(0);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    simulation.reset();

    setState(simulation.getState());

    setComment("Simulation restarted.");

    setConfidence(0);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        variant="h4"
        sx={{
          mb: 4,
          fontWeight: 700,
        }}
      >
        AI System Dynamics
      </Typography>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 3 }}>
          <MetricCard title="Week" value={state.week} />
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <MetricCard title="Motivation" value={state.motivation} />
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <MetricCard title="Skill" value={state.skill} />
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <MetricCard title="Productivity" value={state.productivity} />
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <MetricCard title="Progress" value={state.progress} />
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <MetricCard title="Customer" value={state.customerSatisfaction} />
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <MetricCard title="Burnout" value={state.burnout} />
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <MetricCard title="Budget" value={state.budget} />
        </Grid>
      </Grid>

      <Box
        sx={{
          mt: 4,
          display: "flex",
          gap: 2,
        }}
      >
        <Button
          variant="contained"
          size="large"
          disabled={loading}
          onClick={handleNextWeek}
        >
          {loading ? (
            <CircularProgress size={22} color="inherit" />
          ) : (
            "AI Next Week"
          )}
        </Button>

        <Button variant="outlined" size="large" onClick={handleReset}>
          Reset
        </Button>
      </Box>

      <Card sx={{ mt: 4 }}>
        <CardContent>
          <Typography variant="h5" sx={{ mb: 2 }}>
            AI Recommendation
          </Typography>

          <Alert severity="info">{comment}</Alert>

          <Typography sx={{ mt: 2 }}>
            Confidence: <b>{confidence}%</b>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
