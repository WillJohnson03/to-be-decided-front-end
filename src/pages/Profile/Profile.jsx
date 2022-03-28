import { useLocation } from "react-router-dom";


const Profile = () => {
  const location = useLocation()
  const profile = location.state
  console.log(profile)


  return ( 
    <>
    <h3>{profile.name}</h3>
    </>
  );
}
 
export default Profile;
