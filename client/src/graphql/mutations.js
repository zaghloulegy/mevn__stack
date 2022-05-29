const { HOSTNAME } = require("../config/keys.js");

const addClub = async (state, club) => {
  state.isLoading = true;

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query: `mutation{
                addClub(
                    name: "${state.club.name}",
                    league: "${state.club.league}"
                ){
                    name 
                    id 
                    league
                }
            }`,
    }),
  };

  const response = await fetch(HOSTNAME, options);
  const text = await response.text();
  const jsonRes = JSON.parse(text);
  state.isLoading = false;
  console.log(jsonRes);
  // return jsonRes.data.addClub;
};

const deleteClub = async (state, id) => {
  state.isLoading = true;

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query: `mutation{
                deleteClub(
                    id: "${id}"
                ){
                    name
                }
            }`,
    }),
  };

  const response = await fetch(HOSTNAME, options);
  console.log("deleteClub", response);
  state.isLoading = false;

  // return jsonRes.data.deleteClub;
};
const updateClub = async (state, id) => {
  state.isLoading = true;

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query: `mutation{
                updateClub(
                    id: "${id}",
                    name: "${state.club.name}",
                    league: "${state.club.league}"
                ){
                    id 
                    name 
                    league
                }
            }`,
    }),
  };

  const response = await fetch(HOSTNAME, options);
  console.log("updateClub", response);
  state.isLoading = false;

};



export { addClub, deleteClub, updateClub };