function MealCard({ meal }) {
  return (
    <article className="meal-card">
      <h2>{meal.meal_name}</h2>
      <p>Guest: {meal.guest_name}</p>
      <p>Serves: {meal.serves}</p>
    </article>
  );
}

export default MealCard;
