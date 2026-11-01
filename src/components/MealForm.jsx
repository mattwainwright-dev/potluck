import { useState } from "react";

function MealForm({ onAddMeal }) {
  const [mealName, setMealName] = useState("");
  const [guestName, setGuestName] = useState("");
  const [serves, setServes] = useState(1);

  async function handleSubmit(e) {
    e.preventDefault();

    const newMeal = {
      meal_name: mealName,
      guest_name: guestName,
      serves: Number(serves),
    };

    await onAddMeal(newMeal);

    setMealName("");
    setGuestName("");
    setServes(1);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Bring a Dish</h2>

      <input
        type="text"
        placeholder="Meal name"
        value={mealName}
        onChange={(e) => setMealName(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Guest name"
        value={guestName}
        onChange={(e) => setGuestName(e.target.value)}
        required
      />

      <input
        type="number"
        min="1"
        value={serves}
        onChange={(e) => setServes(e.target.value)}
        required
      />

      <button type="submit">Add Meal</button>
    </form>
  );
}

export default MealForm;
