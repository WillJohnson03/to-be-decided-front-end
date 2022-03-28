// import { useState } from 'react'
// import { getBoardGame } from '../../services/boardgame-api-calls'


// const BoardGames = (props) => {
//   const [formData, setFormData] = useState({
//     name: ''
//   })
//   const [boardGameData , setBoardGameData] = useState({})

//   const handleChange = e => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     })
//   }

//   const handleSubmit = async e => {
//     e.preventDefault()
//     try {
//       getBoardGame(formData.name)
//       .then(boardGameData => {
//         setBoardGameData(boardGameData)
//       })
//       // This is where we'll set state
//     } catch (err) {
//       console.log(err)
//     }
//   }

//   const { name } = formData

//   const isFormInvalid = () => {
//     return !(name)
//   }

//   return (  
//     <>
//       <h1>Board Games Info</h1>
//       <form 
//         autoComplete='off'
//         onSubmit={handleSubmit}
//       >
//         <p>Search:</p>
//         <input 
//           type="text"
//           value={name}
//           name='name'
//           onChange={handleChange}
//         />
//         <button disabled={isFormInvalid()}>Search Board Games</button>
//       </form>
//     </>
//   );
// }
 
// export default BoardGames;