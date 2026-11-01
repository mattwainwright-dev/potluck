
function MealCard({ meal, onRemoveMeal }) {
  return (
    <article className="meal-card">
      <h2>{meal.meal_name}</h2>
      <p>Guest: {meal.guest_name}</p>
      <p>Serves: {meal.serves}</p>

      <button
        type="button"
        onClick={() => onRemoveMeal(meal.id)}
      >
        Remove Meal
      </button>
    </article>
  )
}

export default MealCard
