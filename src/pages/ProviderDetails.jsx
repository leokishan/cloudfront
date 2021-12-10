import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify"
import styles from "../styles/viewUser.module.css";
import { useLocation, useNavigate } from "react-router";

const ProviderDetails = () => {
  const [userData, setUserData] = useState({});
  
  const location = useLocation();
  const navigate = useNavigate()

  useEffect(() => {
    getUserInfo()
  }, [])

  const getUserInfo = async () => {
    try {
      let data = await Auth.currentAuthenticatedUser().catch(err => ({}))
      setUserData(data?.attributes || {});
    } catch (err) {
      console.log(err);
    }
  }

  const goBack = () => navigate("/client_home")

  return (
    <div>
      <div className={styles.userBanner}>
        <div className="mb-2 cursor-pointer" onClick={goBack}><b>&emsp;&lt;&emsp;Back</b></div>
        <div className="d-flex align-items-center">
          <img
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairDreads01&accessoriesType=Kurt&hairColor=Black&facialHairType=BeardMajestic&facialHairColor=Red&clotheType=ShirtVNeck&clotheColor=Heather&eyeType=Default&eyebrowType=AngryNatural&mouthType=Sad&skinColor=Tanned"
            alt="Avatar"
            className={styles.imageHeight}
          />
          <div>
            <b>{userData.name}</b>
            <br />
            {userData.email}
          </div>
        </div>
      </div>
      <div>
        <h3 className="mt-4 text-center">User works</h3>
        <div className={styles.cardContainer}>
          Something
        </div>
      </div>
    </div>
  );
};

export default ProviderDetails;
