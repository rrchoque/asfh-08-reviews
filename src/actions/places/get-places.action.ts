import { prisma } from "@/db";
import { defineAction } from "astro:actions";

export const getPlaces = defineAction({
  accept: "json",
  handler: async ({ query }) => {
    try {
      const places = await prisma.place.findMany();
      return places;
    } catch (error) {
      console.log(error);
      throw new Error("Failed to get places");
    }
  },
});
