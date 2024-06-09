export const getUrlWithParams = (
  initialUrl: string,
  params?: Record<string, string>
): string => {
  const url = new URL(initialUrl)

  if (params) {
    Object.keys(params).forEach(key =>
      url.searchParams.append(key, params[key])
    )
  }

  return url.toString()
}
