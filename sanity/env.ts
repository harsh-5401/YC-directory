export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-10-14";

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET",
  "production",
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID",
  "placeholder",
);

export const token = process.env.SANITY_WRITE_TOKEN;

function assertValue<T>(v: T | undefined, errorMessage: string, fallback?: T): T {
  if (v === undefined) {
    if (process.env.NODE_ENV === "production") {
      throw new Error(errorMessage);
    }
    console.warn(`⚠️  ${errorMessage}. Using fallback value.`);
    return fallback as T;
  }

  return v;
}
