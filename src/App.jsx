
import { useEffect, useState } from 'react'
import { supabase } from './utils/supabase'
import MealCard from './components/MealCard'
import MealForm from './components/MealForm'
import './App.css'

function App() {
  const [meals, setMeals] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchMeals() {
      const { data, error } = await supabase
        .from('meals')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        setError(error.message)
      } else {
        setMeals(data)
      }
    }

    fetchMeals()
  }, [])

  async function addMeal(newMeal) {
    const { data, error } = await supabase
      .from('meals')
      .insert([newMeal])
      .select()

    if (error) {
      setError(error.message)
      throw error
    }

    setError('')
    setMeals((previous) => [data[0], ...previous])
  }

  return (
    <main>
      <h1>Potluck Planner</h1>
      <p>See who's bringing what!</p>

      <MealForm onAddMeal={addMeal} />

      {error && <p role="alert">{error}</p>}

      <section>
        <h2>Our Meals</h2>
        {meals.map((meal) => (
          <MealCard key={meal.id} meal={meal} />
        ))}
      </section>
    </main>
  )
}

export default App
