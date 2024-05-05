export const baseUrl =
  process.env.NODE_ENV ==="production"
    ? process.env.NEXT_PUBLIC_BASE-URL
    :"http://localhost:3000/"