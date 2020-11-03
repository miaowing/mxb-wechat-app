export const GET_BANNER = `
query getBanner($key: String!) {
  allBanners(where: {key: $key}) {
    title,
    content
  }
}
`
