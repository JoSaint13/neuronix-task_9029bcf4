import { Habit } from '@/types'

interface HabitCardProps {
  habit: Habit
}

export default function HabitCard({ habit }: HabitCardProps) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="flex justify-between items-center">
        <h2 className="text-xl">{habit.name}</h2>
        <span className="text-blue-500">🔥 {habit.streak} day streak</span>
      </div>
      <p className="text-gray-500">{habit.category}</p>
    </div>
  )
}