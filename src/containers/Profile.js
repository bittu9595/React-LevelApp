import {useSelector} from "react-redux";
const Profile = (props)=> {

    const profileData = useSelector(state=>state.login.profileInfo);
    console.log('Profile.js---',profileData);

    return (
        <div>
            <h1><center>My Profile</center></h1>
            <div>
                <label>Profile Name</label> : {profileData?.givenName}

            </div>
            <div>
                <label>Profile Email</label> : {profileData?.email}

            </div>
            <div>
                <img src = {profileData.imageUrl} alt = "image"/>
  </div>
        </div>
    )
}
export default Profile;