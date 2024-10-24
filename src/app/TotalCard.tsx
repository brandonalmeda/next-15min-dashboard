export const TotalCard = ({
  title,
  value,
  description,
}: {
  title: string;
  value: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col gap-2 rounded-md border border-gray-200 p-4">
      <h3 className="text-sm font-medium uppercase text-gray-500">{title}</h3>
      <p className="text-2xl font-bold text-black tabular-nums">{value}</p>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
};
