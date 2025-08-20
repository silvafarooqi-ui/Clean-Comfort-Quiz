"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

const activityFactors = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  very_active: 1.9
}

function mifflin({ gender, weight, height, age }) {
  return 10 * weight + 6.25 * height - 5 * age + (gender === "male" ? 5 : -161)
}

const diets = [
  "High-Protein",
  "Vegan",
  "Vegetarian",
  "Pescatarian",
  "Mediterranean",
  "Low-Carb",
  "Muscle Gain",
  "Gluten-Free/Dairy-Free"
]

const calorieOptions = [1600, 1800, 2000, 2200, 2400, 2600, 3000]

export default function QuizPage() {
  const router = useRouter()
  const [form, setForm] = useState({
    gender: "male",
    age: 25,
    height: 175,
    weight: 75,
    activity: "moderate",
    goal: "maintain",
    diet: "High-Protein"
  })

  function onChange(e) {
    const { name, value } = e.target
    setForm(f => ({
      ...f,
      [name]: ["age", "height", "weight"].includes(name) ? Number(value) : value
    }))
  }

  function onSubmit(e) {
    e.preventDefault()
    const bmr = mifflin(form)
    const tdee = bmr * activityFactors[form.activity]

    let target = tdee
    if (form.goal === "lose") target = tdee * 0.85
    if (form.goal === "gain") target = tdee * 1.15
    target = Math.round(target)

    const nearest = calorieOptions.reduce((p, c) =>
      Math.abs(c - target) < Math.abs(p - target) ? c : p
    )

    const params = new URLSearchParams({
      ...form,
      bmr: Math.round(bmr),
      tdee: Math.round(tdee),
      target: nearest
    })

    router.push(`/result?${params.toString()}`)
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 bg-white p-6 rounded-lg shadow"
    >
      <h1 className="text-2xl font-bold">Take the Quiz</h1>

      <div>
        <label className="block">Age</label>
        <input
          name="age"
          type="number"
          value={form.age}
          onChange={onChange}
          className="border p-2 w-full"
        />
      </div>

      <div>
        <label className="block">Height (cm)</label>
        <input
          name="height"
          type="number"
          value={form.height}
          onChange={onChange}
          className="border p-2 w-full"
        />
      </div>

      <div>
        <label className="block">Weight (kg)</label>
        <input
          name="weight"
          type="number"
          value={form.weight}
          onChange={onChange}
          className="border p-2 w-full"
        />
      </div>

      <div>
        <label className="block">Gender</label>
        <select
          name="gender"
          value={form.gender}
          onChange={onChange}
          className="border p-2 w-full"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div>
        <label className="block">Activity Level</label>
        <select
          name="activity"
          value={form.activity}
          onChange={onChange}
          className="border p-2 w-full"
        >
          <option value="sedentary">Sedentary</option>
          <option value="light">Lightly Active</option>
          <option value="moderate">Moderately Active</option>
          <option value="active">Active</option>
          <option value="very_active">Very Active</option>
        </select>
      </div>

      <div>
        <label className="block">Goal</label>
        <select
          name="goal"
          value={form.goal}
          onChange={onChange}
          className="border p-2 w-full"
        >
          <option value="lose">Lose Weight</option>
          <option value="maintain">Maintain</option>
          <option value="gain">Gain Weight</option>
        </select>
      </div>

      <div>
        <label className="block">Diet Preference</label>
        <select
          name="diet"
          value={form.diet}
          onChange={onChange}
          className="border p-2 w-full"
        >
          {diets.map(d => (
            <option key={d}>{d}</option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        See My Meal Plan
      </button>
    </form>
  )
}
