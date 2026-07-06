import { Card, CardContent, Typography } from "@mui/material";

type Props = {
  title: string;

  value: number;
};

export default function MetricCard({
  title,

  value,
}: Props) {
  return (
    <Card elevation={4}>
      <CardContent>
        <Typography color="text.secondary">{title}</Typography>

        <Typography variant="h4" sx={{ mt: 2 }}>
          {value.toFixed(1)}
        </Typography>
      </CardContent>
    </Card>
  );
}
