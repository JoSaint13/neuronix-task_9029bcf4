import Link from 'next/link'

export default function Home() {
  return (
    <main className="text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to StrideTrack</h1>
      <p className="mb-8">Build and maintain positive habits</p>
      
      <div className="flex justify-center gap-4">
        <Link 
          href="/habits" 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          My Habits
        </Link>
        <Link 
          href="/analytics" 
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Analytics
        </Link>
      </div>
    </main>
  )
}