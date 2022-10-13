const axios = require("axios")

function createURLParams(obj) {
  const newObj = {};
  Object.keys(obj).map((key) => {
    newObj[key] = JSON.stringify(obj[key]);
  });

  return new URLSearchParams(newObj);
}

const queryUrl = "http://localhost:8000/subgraphs/name/subgraph";

async function query() {
  const query = `{
transferEntities {
    id
    from
    to
    amount
}
}`;

  try {
    const result = await axios.post(queryUrl, {query: query}, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
    });
    
    const { data } = result;
    
    if(data.errors) {
      if(data.errors[0].locations) console.log({error_location: data.errors[0].locations})
      console.log({errors: data.errors})
    }

    if(data.data) {
      console.log("Data: ", data.data)
    }
    // console.log({data})
  } catch (e) {
    console.log({ERRORS: e})
  }
}
query();
