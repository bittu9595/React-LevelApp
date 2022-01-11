//action creator -> is a function which return action
//action -> object containing two things(type,payload)

export const setProfileData = (profileData)=> {
 return {
        type: 'SAVE_PROFILE_DATA',
        payload: profileData
    }
}