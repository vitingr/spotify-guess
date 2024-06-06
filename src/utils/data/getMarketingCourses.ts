export const getMarketingCourses = async () => {
  const requisiton = await fetch("http://localhost:3333/marketingCourses")
  const response = await requisiton.json()
  return response
}