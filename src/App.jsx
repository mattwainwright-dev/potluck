import { useEffect, useState } from "react";
import { supabase } from "./utils/supabase";
import MealCard from "./components/MealCard";
import MealForm from "./components/MealForm";
import "./App.css";

function App() {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchMeals() {
      const { data, error } = await supabase
        .from("meals")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        setError(error.message);
      } else {
        setMeals(data);
      }
    }

    fetchMeals();
  }, []);

  async function addMeal(newMeal) {
    const { data, error } = await supabase
      .from("meals")
      .insert([newMeal])
      .select();

    if (error) {
      setError(error.message);
      throw error;
    }

    setError("");
    setMeals((previous) => [data[0], ...previous]);
  }

  async function removeMeal(id) {
    const { error } = await supabase.from("meals").delete().eq("id", id);

    if (error) {
      setError(error.message);
      return;
    }

    setError("");
    setMeals((previous) => previous.filter((meal) => meal.id !== id));
  }

  return (
    <main>
      <h1>Pulseluck Planner</h1>
      <p>Good food. Good people. One heartbeat.</p>

      <MealForm onAddMeal={addMeal} />

      {error && <p role="alert">{error}</p>}

      <section>
        <h2>Our Meals</h2>
        {meals.map((meal) => (
          <MealCard key={meal.id} meal={meal} onRemoveMeal={removeMeal} />
        ))}
      </section>
    </main>
  );
}

export default App;
