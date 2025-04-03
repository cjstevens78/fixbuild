interface StatCardProps {
  value: string
  label: string
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold">{value}</div>
      <div className="text-gray-500">{label}</div>
    </div>
  )
}

