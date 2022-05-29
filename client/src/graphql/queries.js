const {HOSTNAME} = require("../config/keys.js");
const getClubs = async (state) => {

  state.isLoading = true;

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
      body: JSON.stringify({ 
          query: `{
              clubs{
                       name 
                       id 
                       league
            }
        }` 
        })
    
  };

  const response = await fetch(HOSTNAME, options);
  //   console.log(response);
  const text = await response.text();
  const jsonRes = JSON.parse(text);
  // console.log(jsonRes.data.clubs);
    state.isLoading = false;

  return jsonRes.data.clubs;
};

export { getClubs };
