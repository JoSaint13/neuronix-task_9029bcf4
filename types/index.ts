export interface Habit {
  id: string;
  name: string;
  category: 'Personal' | 'Professional' | 'Health' | 'Other';
  streak: number;
  lastCompletedDate?: Date;
  goalFrequency: 'daily' | 'weekly' | 'monthly';
}

export interface HabitStore {
  habits: Habit[];
  addHabit: (habit: Omit<Habit, 'id'>) => void;
  completeHabit: (habitId: string) => void;
  calculateStreak: (habit: Habit) => number;
}