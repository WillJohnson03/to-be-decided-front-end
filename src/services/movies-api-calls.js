const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}`


function movieApiKey () {
  fetch(`${process.env.REACT_APP_BACKEND_SERVER_URL}/api/movies`)
    .then(res => {
      console.log(res);
      res.json()
    })
    
  }
  //call api key on the backend
  //