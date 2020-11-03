export const GET_META = `
query {
  allSiteMetas {
    title,
    icp,
    icp_url,
    avatar {
    publicUrl
    }
    description,
    admin_name,
    admin_email
  }
}
`