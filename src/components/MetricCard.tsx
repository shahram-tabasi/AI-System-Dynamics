type Props = {
  title: string;

  value: number;
};

export default function MetricCard({
  title,

  value,
}: Props) {
  return (
    <div>
      <h3>{title}</h3>

      <h1>{value.toFixed(1)}</h1>
    </div>
  );
}
