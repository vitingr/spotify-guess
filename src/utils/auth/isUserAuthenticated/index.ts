export const isUserAuthenticated = async (status: string) => {
  if (status == 'authenticated') {
    return true
  } else {
    return false
  }
}
