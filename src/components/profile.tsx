import React from "react";

const Profile = (userDetails: any) => {

    const user = userDetails.user;
    const logout = (): any => {
          window.open(
            `${import.meta.env.VITE_REACT_APP_API_URL}/auth/logout`,
            "-self"
          );
     
      };


  return (

    <>
     <h2 className="text-center text-gray-900">
    </h2>

    <p>{user.username}</p>
    <p>{user.email}</p>

    <button onClick={logout}>Logout</button>
    </>

   
  );
};

export default Profile;
