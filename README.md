
# Pulseluck Planner

**Good food. Good people. One heartbeat.**

Pulseluck Planner is a React application that helps guests organize meals for a potluck gathering. It uses Supabase to store and manage meals.

## Features

- View saved meals from Supabase.
- Add a meal with a guest name and serving count.
- Remove individual meals by ID.
- Keep meal data after refreshing the page.
- Display meals using reusable React components.
- Custom PULSE styling with a cyan particle background.

## Technologies

- React
- Vite
- JavaScript
- Supabase
- CSS
- Bun

## Getting Started

Clone the repository:

```bash
git clone https://github.com/mattwainwright-dev/potluck.git
cd potluck
bun install
```

Create a `.env.local` file in the project root:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
```

Start the development server:

```bash
bun run dev
```

## Database

The application uses a Supabase table named `meals` with these fields:

- `id` — Unique meal identifier
- `meal_name` — Name of the dish
- `guest_name` — Person bringing the dish
- `serves` — Number of servings

## Testing

Verified locally:

- Meals load from Supabase.
- New meals can be added and remain after refresh.
- Removing a meal deletes the selected record.
- Other meals remain after deletion.

## Deployment

Netlify deployment is planned. Configure the two Vite environment variables in Netlify before building the site.

## Author

Matthew Wainwright

CodeX Academy — Level 3, Week 5
