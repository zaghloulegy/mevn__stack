const url = "http://localhost:3000/graphql";
const getClubs = async () => {
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      body: JSON.stringify({ query: `{clubs(name id league)}` }),
    },
  };

  const response = await fetch(url, options);
  console.log(response);
  const text = await response.text();
};

export { getClubs };
