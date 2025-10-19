'use client'
import { useState } from 'react'
import HabitCard from '@/components/HabitCard'
import HabitCreator from '@/components/HabitCreator'
import { Habit } from '@/types'

export default function HabitsPage() {
  const [habits, setHabits] = useState<Habit[]>([])

  const addHabit = (newHabit: Omit<Habit, 'id'>) => {
    const habit: Habit = {
      ...newHabit,
      id: Date.now().toString(),
      streak: 0
    }
    setHabits([...habits, habit])
  }

  return (
    <div>
      <h1 className="text-2xl mb-4">My Habits</h1>
      <HabitCreator onCreateHabit={addHabit} />
      <div className="grid gap-4 mt-4">
        {habits.map(habit => (
          <HabitCard key={habit.id} habit={habit} />
        ))}
      </div>
    </div>
  )
}