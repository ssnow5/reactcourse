import MealsGrid from "@/components/meals/meals-grid";
import classes from "./page.module.css";
import Link from "next/link";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

export const metadata = {
  title: "All Meals",
  description: "Browse the delicious meals shared by our vibrant community",
};

async function Meals() {
  console.log("Fetching meals");
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  // console.log('Meals Page');
  // return <h1>Meals Page</h1>;

  return (
    <>
      <header className={classes.header}></header>
      <h1>
        Delicious meals, created{" "}
        <span className={classes.highlight}>by you</span>
      </h1>
      <p>
        Choose your facourite receipe and cook it yourself. It is easy and fun.
      </p>
      <p className={classes.cta}>
        <Link href="/meals/share">Share Your Favourite Receipe</Link>
      </p>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Fetching meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
