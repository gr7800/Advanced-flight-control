import { Flex, Box, Text, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import AltitudeIndicator from "../utills/images/altitude-indicator.png";
import AltitudePointer from "../utills/images/altitude-pointer.png";

function Altitude({ onScoreChange }) {
    const minAltitude = 2000;
    const maxAltitude = 6000;
    const numIntervals = (maxAltitude - minAltitude) / 200;
    const intervalSize = 200;

    const [altitude, setAltitude] = useState(4000);

    const [sc, setSc] = useState(0);
    const [qc, setQc] = useState(0);

    useEffect(() => {
        // Function to update altitude randomly by +/-100
        const updateAltitude = () => {
            setAltitude((prevAltitude) => {
                const delta = Math.random() < 0.5 ? -100 : 100;
                const newAltitude = prevAltitude + delta;
                return newAltitude < minAltitude || newAltitude > maxAltitude
                    ? prevAltitude
                    : newAltitude;
            });

            setQc((prev) => prev + 1);
        };

        // Start the interval to update altitude every 2 seconds
        const intervalId = setInterval(updateAltitude, 2000);

        // Cleanup function to clear the interval
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {

        const handleKeyDown = (e) => {
            if (altitude === 4000) {
                setSc((prev) => prev + 1);
                setQc((prev) => prev + 1);
            }
            if (e.key === "+") {
                setAltitude((prevAltitude) =>
                    prevAltitude < maxAltitude ? prevAltitude + 100 : prevAltitude
                );
            } else if (e.key === "-") {
                setAltitude((prevAltitude) =>
                    prevAltitude > minAltitude ? prevAltitude - 100 : prevAltitude
                );
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        }
    }, [altitude])


    useEffect(() => {
        let score = Math.floor((sc / qc) * 100);
        onScoreChange(score, "altitudeScore");
    }, [sc])

    const indicatorValue =
        altitude < minAltitude ? minAltitude : altitude > maxAltitude ? maxAltitude : altitude;
    const indicatorHeight = (maxAltitude - indicatorValue) / intervalSize * 23.15;
    const pointerHeight = indicatorHeight + 232.422;

    return (
        <Flex
            justify="space-between"
            align="center"
            w={"75px"}
            h="200px"
            tabIndex="1"
            style={{ outline: "none", scrollBehavior: "smooth" }}
            bg={"coral"}
            transition="top 0.5s ease-out, bottom 0.5s ease-out"
            shadow={"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}
        >
            <Box position="relative" width={"100%"} height={"100%"} overflow={"hidden"} display="flex">
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
                        <Box display={"flex"} gap={"5px"} w={"100%"} mt={"100px"}>
                            {(maxAltitude - i * intervalSize) === 4000 ? (
                                <Image
                                    src={AltitudePointer}
                                    alt="altitude-pointer"
                                    h={"21px"}
                                    w={"20px"}
                                    ml={"-17px"}

                                />
                            ) : (
                                "—"
                            )}
                            {/* </Box> */}
                            <Text fontSize="l" textAlign={"left"}>
                                {maxAltitude - i * intervalSize}
                            </Text>
                        </Box>
                    </Flex>
                ))}
                {/* ...... CurrentAltitudeIndicator .........  */}
                <Box
                    position="relative"
                    margin="auto"
                    top={"23%"}
                    left="80%"
                    transform={`translate(-${85}%, -100%)`}
                    bgImage={AltitudeIndicator}
                    w={"60px"}
                    h={"30px"}
                >
                    <Text fontSize="lg" color={(altitude===4000)?"green":"red"} fontWeight="bold" textAlign="center" pt="2px">
                        {altitude}
                    </Text>
                </Box>
            </Box>
        </Flex>
    );
}

export default Altitude;


