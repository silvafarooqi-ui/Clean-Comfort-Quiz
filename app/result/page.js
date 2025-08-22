"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function ResultPage() {
  const params = useSearchParams()
  const [mealPlan, setMealPlan] = useState(null)

  // Read values from quiz
  const age = params.get("age")
  const weight = params.get("weight")
  const height = params.get("height")
  const gender = params.get("gender")
  const activity = params.get("activity")
  const goal = params.get("goal")
  const diet = params.get("diet")
  const target = params.get("target")

  // In the future, replace with recipes from Notion or your ebook
  useEffect(() => {
    // Mock meal plan for now
    const samplePlan = {
      breakfast: "Greek Yogurt Bowl with Berries and Honey",
      lunch: "Grilled Chicken Salad with Olive Oil Dressing",
      dinner: "Salmon with Quinoa and Steamed Vegetables",
      snacks: "Handful of almonds + protein smoothie"
    }

    setMealPlan(samplePlan)
  }, [diet, target])

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow space-y-4">
      <h1 className="text-2xl font-bold">Your Clean Comfort Meal Plan</h1>
      <p>
        <strong>Diet Type:</strong> {diet}
      </p>
      <p>
        <strong>Calorie Target:</strong> {target} kcal/day
      </p>

      <h2 className="text-xl font-semibold mt-4">Meals</h2>
      {mealPlan ? (
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Breakfast:</strong> {mealPlan.breakfast}</li>
          <li><strong>Lunch:</strong> {mealPlan.lunch}</li>
          <li><strong>Dinner:</strong> {mealPlan.dinner}</li>
          <li><strong>Snacks:</strong> {mealPlan.snacks}</li>
        </ul>
      ) : (
        <p>Loading your meal plan...</p>
      )}
    </div>
  )
}
