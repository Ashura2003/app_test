// Importing React package
import React, { useEffect } from "react";
import { testAPI } from "../../apis/Api";

// Creating Homepage UI
const Homepage = () => {
  
  // Print Hello!, when page loads(Automatic)
    useEffect(() => {
        console.log("Hello!")

        //trigger testAPI
        testAPI().then((res) => {
            console.log(res) // Test API is Working
        })

    })
    

  return <div>HomePage</div>;
};

export default Homepage;
