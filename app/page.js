import Link from "next/link"

export default function Home() {
  return (
    <main className="text-center">
      <h1 className="text-3xl font-bold mb-4">Clean Comfort Quiz</h1>
      <p className="mb-6">Your personalized meal plan, by Mohammad Farooqi</p>
      <Link
        href="/quiz"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Start the Quiz
      </Link>
    </main>
  )
}
