// import { Box, Stack, Typography,Button } from '@mui/material'
// import React, { useEffect } from 'react'
// import "../Header/DestinationBanner.css"

// import { useDispatch, useSelector } from 'react-redux'
// import { useRouter } from 'next/router'


// export const  DestinationBanner=()=>{
//   const router = useRouter();
//   const {locations} = useSelector((state)=>state.locations);
  
//   const handleCityClick = (id,stateName,cityName) => {
//    console.log("id,cityName,stateName",id,cityName,stateName);
//    sessionStorage.setItem("setStorageId",id);
//    router.push(`/place-to-visit/${stateName}/${cityName}`);
//   };
//   const handleClick = ()=>{
//     router.push('/places');
//   }

//   return<>
//   <Box className="DestinationBanner">
//   <Box className="destination-top">
//   <Stack direction="row" justifyContent="space-evenly" gap={83}>
//   <Box>
//   <Typography className='Des-heading' variant="h4" sx={{fontWeight:700}}  >Destination</Typography>
//    <Typography varient="body1" paragraph>for every bucket list </Typography>
 
//    </Box>
    
//    <Box>
//     <Button onClick={handleClick} className="discoverMore-btn" color="error" variant="contained" >Discover More</Button>
//   </Box>
//   </Stack>
//   </Box>



// <Box className="desOuterDiv">
//   {locations
//     .filter((location) => location.parent_id !== null) 
//     .slice(0, 6) 
//     .map((location, index) => {
//       return (
//         <Box key={index} className="desDiv" position="relative" onClick={()=>handleCityClick(location._id,location.name,location.parent_id.name)}>
//           <Box width="310px" height="279px">
         
//             <img
              
//               className="desImg"
//               src={location.picture}
//               alt="img"
//               width="100%"
//               height="100%"
//             />
//             <Box className="overlayText">
//             <Typography
//               variant="h6"
//               sx={{
//                 position: "absolute",
//                 fontWeight: "bold",
//                   }}
//             >
//               {location.name}
//             </Typography>
//             </Box>
//           </Box>
//         </Box>
//       );
//     })}
// </Box>
// </Box>
//  </>

// }

import { Box, Stack, Typography, Button, Fade, Slide } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import "../Header/DestinationBanner.css";

export const DestinationBanner = () => {
  const router = useRouter();
  const { locations } = useSelector((state) => state.locations);

  const handleCityClick = (id, stateName, cityName) => {
    sessionStorage.setItem("setStorageId", id);
    router.push(`/place-to-visit/${stateName}/${cityName}`);
  };

  const handleClick = () => {
    router.push("/places");
  };

  return (
    <Fade in={true} timeout={1000}>
      <Box className="DestinationBanner">

        <Box sx={{padding:"30px"}} className="destination-top">
  
  <Box sx={{position:"absolute", left:"13%"}} >
 
      <Typography className="Des-heading" variant="h4" sx={{ fontWeight: 700}}>
        Destination
      </Typography>
      <Typography variant="body1" paragraph>
        for every bucket list
      </Typography>

  </Box>

  
    
    <Button sx={{position:"absolute", right:"13%"}}
      onClick={handleClick}
      className="discoverMor-btn"
      color="error"
      variant="contained"
    >
      Discover More
    </Button>
  
</Box>


        {/* Destination Cards Section */}
        <Box className="desOuterDiv" 
        sx={{
         
        }}
        >
          {locations
            .filter((location) => location.parent_id !== null)
            .slice(0, 6)
            .map((location, index) => (
              <Box className="desDiv" key={index} onClick={() => handleCityClick(location._id, location.name, location.parent_id.name)}>
  <Box className="imgContainer">
    <img className="desImg" src={location.picture} alt="Destination" />
    <Box className="overlay">
      <Box className="overlayContent">
        <Typography className="overlayText" variant="h6">
          {location.name}
        </Typography>
        <Typography className="overlayText" variant="subtitle1">
          {location.parent_id.name}
        </Typography>
        <Button className="overlayButton" variant="contained" color="error">
          Explore
        </Button>
      </Box>
    </Box>
  </Box>
</Box>

            ))}
        </Box>
      </Box>
    </Fade>
  );
};
