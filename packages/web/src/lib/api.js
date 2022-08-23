let strapiApiUrl = process.env.STRAPI_API_URL || 'http://localhost:1337'
const strapiApiToken =
  process.env.STRAPI_API_TOKEN ||
  'a5d383194f6a3b685c684a5eb9acd43617b0635cd3003c07fffe4d93d2486e1cf6c9cb9d31c1a74384ff04c9c7527fbd2319828b816f03e74bc3a38ad8e7b981cda5a3fe8472619e0375ce5bc0a48e3b6f005d25cc01c9a9d5772844be1df60de9ab609dcbcd03d185a39e233ceff6f4a5fe8c1deb8abc97d83eb303445076ca'

export const mockApiUrl = (url) => (strapiApiUrl = url)

export const fetchApi = async (query, { variables = {} } = {}) => {
  const rawRes = await fetch(`${strapiApiUrl}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Http-Origin': 'localhost',
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
