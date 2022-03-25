const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}`


export function getMovieList () {
  fetch(`${process.env.REACT_APP_BACKEND_SERVER_URL}/api/profiles/addMovie`)
    .then(res => {
      console.log(res);
      res.json()
    })
    
  }
  //call api key on the backend
  //