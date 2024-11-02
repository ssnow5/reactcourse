"use server";

<<<<<<< HEAD
import { revalidatePath } from 'next/cache';
import { saveMeal } from './meals';
import { redirect } from 'next/navigation';
=======
import { revalidatePath } from "next/cache";
import { saveMeal } from "./meals";
import { redirect } from "next/navigation";
>>>>>>> d68742d5a2f0d452524b9ea7e650ec73f2ef0e34

function isInvalidText(text) {
  return !text || text.trim() === "";
}

export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    //throw new Error('Invalid input');
    return {
      message: "Invalid input.",
    };
  }
  //    console.log(meal);
  await saveMeal(meal);
<<<<<<< HEAD
  revalidatePath('/meals');
  redirect('/meals');
=======
  revalidatePath("/meals");
  redirect("/meals");
>>>>>>> d68742d5a2f0d452524b9ea7e650ec73f2ef0e34
}
