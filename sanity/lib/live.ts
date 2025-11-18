import "server-only";

import { defineLive } from "next-sanity/live";
import { client } from "@/sanity/lib/client";

export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: process.env.SANITY_API_READ_TOKEN || false,
  browserToken: false, // Set to false for now, enable later if needed for live preview
});
