import { useLocation } from "react-router-dom";


const Profile = () => {
  const location = useLocation()
  const profile = location.state
  console.log(profile)


  return ( 
    <>
    <h3>profile</h3>
    </>
  );
}
 
export default Profile;
