const GET_EMAIL = `
  query {
    shop {
      email
    }
  }
`;


export const getEmail = async (admin) => {
    const email = await admin.graphql(GET_EMAIL)
    const results = await email.json()
    return results?.data.shop
}