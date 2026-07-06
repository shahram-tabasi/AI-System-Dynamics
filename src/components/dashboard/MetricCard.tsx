import { Card, CardContent, Typography } from "@mui/material";

interface MetricCardProps {
  title: string;
  value: number;
}

export default function MetricCard({ title, value }: MetricCardProps) {
  return (
    <Card elevation={3}>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>

        <Typography variant="h4" sx={{ mt: 2, fontWeight: "bold" }}>
          {value.toFixed(1)}
        </Typography>
      </CardContent>
    </Card>
  );
}
