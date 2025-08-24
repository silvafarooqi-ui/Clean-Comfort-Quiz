export default function HomePage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold">Clean Comfort</h1>
        <p className="text-lg">by Mohammad Farooqi</p>
        <a
          href="/quiz"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Start Quiz
        </a>
      </div>
    </div>
  )
}
