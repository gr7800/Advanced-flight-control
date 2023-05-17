import { useState, useEffect } from "react";
import { Box, CircularProgress } from "@chakra-ui/react"

import { useNavigate } from "react-router-dom"

import BorderImage from "../utills/images/gamebodyimage.png"
import Airspeed from "../Components/Airspeed";
import Altitude from "../Components/Altitude";
import Director from "../Components/Director";
import Heading from "../Components/Heading";

const Startgame = () => {
  let navigate = useNavigate();

  const [score, setScore] = useState({
    "directorScore": 0,
    "altitudeScore": 0,
    "airspeedScore": 0,
    "headingScore": 0
  })

  const [elapsedTime, setElapsedTime] = useState(0);
  const totalTime = 5*60; // 5 minutes in seconds
  const minutes = Math.floor((totalTime - elapsedTime) / 60);
  const ms = elapsedTime % 60;

  useEffect(() => {
    if (minutes < 0) {
      let totalScore = Math.floor((score.airspeedScore + score.altitudeScore + score.headingScore + score.directorScore) / 4)
      let difficulty =localStorage.getItem("difficulty");
      let userScore = JSON.parse(localStorage.getItem("afscore"));
      localStorage.setItem("afscore",JSON.stringify({...userScore,[difficulty]:totalScore}))

      navigate("/result", {
        state: { totalScore: totalScore, altitudeScore: score.altitudeScore, airspeedScore: score.airspeedScore, headingScore: score.headingScore, directorScore: score.directorScore }
      });
    }
    const intervalId = setInterval(() => {
      setElapsedTime(prevElapsedTime => prevElapsedTime + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [elapsedTime]);

  const progress = (elapsedTime / totalTime) * 100;


  // ...................... 



  const handleScoreChange = (newScore, name) => {
    setScore({ ...score, [name]: newScore });
  }



  return (
    <Box bg="aquamarine" h={"100vh"} >
      <Box width={"100%"} display={"flex"}>
        <CircularProgress
          value={progress}
          max={100}
          color={progress < 50 ? "green.400" : progress < 80 ? "yellow.400" : "red.400"}
          size="120px"
          thickness="8px"
          capIsRound
        >
          <svg style={{
            fontSize: "20px",
            fill: "currentColor",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}>
            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">
              {minutes < 10 ? `0${minutes}` : minutes}:{ms < 10 ? `0${ms}` : ms}
            </text>
          </svg>
        </CircularProgress>
      </Box>
      <Box
        bg="aquamarine"
        // h="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"

      >
        <Box w={"400px"} height={"430px"} bgImage={BorderImage} bgSize={"cover"} p={"50px"}  >
          <Box display={"flex"} gap={"20px"} >
            <Box h={"200px"}>
              <Airspeed onScoreChange={handleScoreChange} />
            </Box>
            <Box width={"200px"}>
              <Director onScoreChange={handleScoreChange} />
            </Box>
            <Box h={"200px"}>
              <Altitude onScoreChange={handleScoreChange} />
            </Box>
          </Box>
          <Box marginTop={"20px"}>
            <Heading onScoreChange={handleScoreChange} />
          </Box>
        </Box>
      </Box>
    </Box >
  )
}

export default Startgame