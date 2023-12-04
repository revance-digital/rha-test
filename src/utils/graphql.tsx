// helper function to execute GraphQL queries

export default async function fetchGraphQL(
  query: string,
  variables?: Record<string, unknown>
): Promise<Response> {
  // api token
  const token = process.env.HYGRAPH_TOKEN;

  // endpoint
  const endpoint = `https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/cleztq2ep1c5n01ujd2aad7ml/master`;

  // configure fetch
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json", //content type
      Accept: "application/json", // accepted response
      Authorization: `Bearer ${token}`, // authorization token
    },
    body: JSON.stringify({ query, variables }), // request body
  };

  // execute and return fetch
  return await fetch(endpoint, fetchOptions);
}
