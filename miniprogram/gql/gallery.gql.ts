export const GET_GALLERIES = `
query {
  allGalleries(where: { publish: true }, orderBy: "sort_ASC", first: 4) {
    title,
    description,
    url,
    thumb {
    publicUrl
    }
  }
}
`