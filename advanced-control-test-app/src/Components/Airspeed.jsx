import { Flex, Box, Text, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import AirspeedblackIndecator from "../utills/images/airspeedblackindecator.png";
import AirspeedredIndecator from "../utills/images/airspeedredindicator.png";

function Airspeed({onScoreChange}) {
  const minSpeed = 0;
  const maxSpeed = 380;
  const numIntervals = 19;
  const intervalSize = (maxSpeed - minSpeed) / numIntervals;

  const [airspeed, setAirspeed] = useState(240);
  const [qc, setQc] = useState(0);
  const [res, setRes] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (airspeed === 240) {
        setRes(prev => prev + 1);
        setQc(prev=>prev+1);
      }
      if (e.key === "w") {
        setAirspeed((prevAirspeed) =>
          prevAirspeed < maxSpeed ? prevAirspeed + 5 : prevAirspeed
        );
      } else if (e.key === "s") {
        setAirspeed((prevAirspeed) =>
          prevAirspeed > minSpeed ? prevAirspeed - 5 : prevAirspeed
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    }
  }, [airspeed])

  useEffect(() => {
    let interval = setInterval(() => {
      setQc((pre) => pre + 1);
      let random = Math.floor(Math.random() * 2) === 0 ? 1 : -1;
      setAirspeed(prevAirspeed => prevAirspeed + (random * 5));
    }, 5000)

    // Cleanup function to clear the interval
    return () => clearInterval(interval);
  }, [])

  useEffect(() => {
    let score = Math.floor((res / qc) * 100);
    onScoreChange(score, "airspeedScore");
  }, [res])

  const indicatorValue = airspeed < minSpeed ? minSpeed : (airspeed > maxSpeed ? maxSpeed : airspeed);
  const indicatorHeight = (maxSpeed - indicatorValue) / intervalSize * 23.15;
  const pointerHeight = indicatorHeight + 232.422;


  return (
    <Flex
      justify="space-between"
      align="center"
      w={"60px"}
      h="200px"
      tabIndex="1"
      style={{ outline: "none" }}
      bg={"coral"}
      shadow={"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}
    >
      <Box
        position="relative"
        width={"100%"}
        height={"100%"}
        overflow={"hidden"}
        display="flex"
        transition="top 0.5s ease-out, bottom 0.5s ease-out"
      >
        {[...Array(numIntervals + 1)].map((_, i) => (
          <Flex
            flexDirection={"column"}
            key={i}
            align="center"
            position="absolute"
            left="50%"
            transform={`translate(-50%, ${i * 23.15 - indicatorHeight}px)`}
            mt={"5px"}

          >

            <Box display={"flex"} gap={"5px"} w={"100%"} mt={"100px"}  >
              <Text fontSize="l" textAlign={"left"}  >
                {maxSpeed - i * intervalSize}
              </Text>
              <Flex textAlign={"right"} flexDirection={"column"} justify={"center"}>
                {maxSpeed - i * intervalSize === 240 ? (
                  <Image
                    src={AirspeedredIndecator}
                    alt="airspeedredindcator"
                    h={"10px"}
                    w={"50px"}
                  />
                ) : (
                  "-"
                )}
              </Flex>
            </Box>
            <Box fontSize={"xl"} textAlign={"right"} ml={"30px"} mt={"-17"}   >
              —
            </Box>
          </Flex>
        ))}
        {/* ...... CurrentSpeedIndecator .........  */}
        <Box
          position="relative"
          margin="auto"
          top={"23%"}
          left="50%"
          transform={`translate(-${85}%, -100%)`}
          bgImage={AirspeedblackIndecator}
          w={"50px"}
          h={"30px"}
        >
          <Text fontSize="lg" color={(airspeed===240)?"green":"red"} fontWeight="bold" textAlign="center" pt="2px">
            {airspeed}
          </Text>
        </Box>
      </Box>
    </Flex>
  );
}

export default Airspeed;


