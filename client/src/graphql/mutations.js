const { HOSTNAME } = require("../config/keys.js");
const addClub = async (state, club) => { 
    state.isLoading = true;

    const options = {
        method: "POST",
        headers: {
            "content-type": "application/json"
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
            }` 
        })
    };

    const response = await fetch(HOSTNAME, options);
    const text = await response.text();
    const jsonRes = JSON.parse(text);
    state.isLoading = false;
    console.log(jsonRes);
    // return jsonRes.data.addClub;
}

export { addClub };