'use client'
import { useState } from 'react'
import { Habit } from '@/types'

interface HabitCreatorProps {
  onCreateHabit: (habit: Omit<Habit, 'id'>) => void
}

export default function HabitCreator({ onCreateHabit }: HabitCreatorProps) {
  const [name, setName] = useState('')
  const [category, setCategory] = useState<Habit['category']>('Personal')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name) return

    onCreateHabit({
      name,
      category,
      streak: 0,
      goalFrequency: 'daily'
    })

    setName('')
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
      <input 
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter habit name"
        className="w-full p-2 border rounded"
      />
      <select 
        value={category}
        onChange={(e) => setCategory(e.target.value as Habit['category'])}
        className="w-full p-2 mt-2 border rounded"
      >
        {['Personal', 'Professional', 'Health', 'Other'].map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <button 
        type="submit" 
        className="w-full mt-2 bg-green-500 text-white p-2 rounded"
      >
        Create Habit
      </button>
    </form>
  )
}