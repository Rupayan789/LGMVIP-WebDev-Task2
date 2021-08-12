import React from 'react'
import Lottie from 'react-lottie';
import "./styles.scss"
const HomeBody = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: require("../../assets/welcome.json"),
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <div>
             <Lottie options={defaultOptions}
              height={300}
              width={300}
              />
              <div className="welcome-text">
                  Welcome &#128578;
              </div>
              <div className="guide-text">
                  Click on Get User Button to get all users
              </div>
            
        </div>
    )
}

export default HomeBody
