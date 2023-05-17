import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
// import { BaseUrl } from '../utills/helper';

const Result = () => {
  const location = useLocation();
  const { totalScore,altitudeScore,airspeedScore,headingScore,directorScore } = location.state || {};
  const difficulty=localStorage.getItem("difficulty");
  const navigate = useNavigate();
  const handleClick =()=>{
    navigate("/")
  }

  return (
    <>
      <Box display={"flex"} flexDirection={"column"} gap={"5px"} margin={"auto"} height={"100vh"} bg="gray.200"  alignContent={"center"} >
        <Box bg={"aqua"} p={"5px"}  fontSize={'30px'} fontWeight={"bold"} color={"black"}>Results</Box>
        <Box bg={"aqua"} p={"5px"} fontSize={"20px"} color={"black"}>
          Level:      {difficulty}
        </Box>
        <Box bg={"aqua"} p={"5px"} fontSize={"20px"} color={"black"}>
          Airspeed Score:   {airspeedScore}%
        </Box>
        <Box bg={"aqua"} p={"5px"} fontSize={"20px"} color={"black"}>
          Director Score:   {directorScore}%
        </Box>
        <Box bg={"aqua"} p={"5px"} fontSize={"20px"} color={"black"}>
          AltitudeScore:   {altitudeScore}%
        </Box>
        <Box bg={"aqua"} p={"5px"} fontSize={"20px"} color={"black"}>
          Heading Score:   {headingScore}%
        </Box>
        <Box bg={"aqua"} p={"5px"} fontSize={"20px"} color={"black"}>
          Average Score:   {totalScore}%
        </Box>
        <Box bg={"aqua"} p={"5px"} fontSize={"20px"} color={"black"}>
          <Button bg={"red"} color={"white"} _hover={{bg:"white",color:"black"}}  onClick={handleClick}>Retake Test</Button>
        </Box>
      </Box>
    </>
  );
};

export default Result
