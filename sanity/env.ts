export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-02-16'

// Add fallback values for local development
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 
  (process.env.NODE_ENV === 'development' ? 'production' : assertValue(
    process.env.NEXT_PUBLIC_SANITY_DATASET,
    'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
  ))

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 
  (process.env.NODE_ENV === 'development' ? '7gi8qg8c' : assertValue(
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
  ))

export const token = process.env.SANITY_WRITE_TOKEN

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}