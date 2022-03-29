import { useLocation } from "react-router-dom";


const Profile = (props) => {
  const location = useLocation()
  const profile = location.state
  console.log(props)


  return ( 
    <>
      <h3>{profile.name}</h3>
    </>
  );
}
 
export default Profile;
