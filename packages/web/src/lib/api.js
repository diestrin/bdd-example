const strapiApiUrl = process.env.STRAPI_API_URL || 'http://localhost:1337'
const strapiApiToken =
  process.env.STRAPI_API_TOKEN ||
  'a355b8d3599b31b24cb16acc15f4a9a90384f27b804daee3a877ecf69bb87665f976ec01777cb6d073b78518a86f4d9e74ad5b50a935a4e2e161036e82ef08bbc303eeb3aabf8418dfcc784c439b18cdd8f3676c7114777ea06a1a9678cdde1df2bbc4b5b30a59eebc4ee258b44820cca43e929d0ccd20b3e8db67e07c975985'

export const fetchApi = async (query, { variables = {} } = {}) => {
  const rawRes = await fetch(`${strapiApiUrl}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(strapiApiToken ? { Authorization: `Bearer ${strapiApiToken}` } : {}),
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const res = await rawRes.json()

  if (res.errors) {
    console.error(res.errors)
    throw new Error('Failed to fetch API')
  }

  return res.data
}
