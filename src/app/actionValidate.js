"use server";

import { revalidateTag } from "next/cache";

export default async function ActionRevalidate() {
  revalidateTag("adding_event");
}
