import { Box, Flex, Heading, Text, Divider, Image, UnorderedList, ListItem } from "@chakra-ui/react";
import React, { useEffect } from 'react'
import Gamescreenh from "../utills/images/gamescreenh.png"
import Joysticandarrowinage from "../utills/images/joysticandarrowinage.jpg"
import DifficultyCheckboxGroup from "../Components/DifficultyCheckboxGroup";
import computer_tablet_phoneimage from "../utills/computer_tablet_phoneimage.jpg"
import Controlimage2 from "../utills/images/headinghomesc.jpg"
import Controlimage1 from "../utills/images/controlimage1.jpg"
import Recomdeddevice from "../utills/images/recomndeddevice.png"
import Slipbalsh from "../utills/images/slipballswithh.png"

const HomePage = () => {
    const user = JSON.parse(localStorage.getItem("afscore")) || {}
    // const [score, setScore] = useState({})
    useEffect(() => {
        if (user.length === 0) {
            localStorage.setItem("afscore", JSON.stringify({
                "easy": 0,
                "medium": 0,
                "hard": 0,
            }))
        }
    }, []);


    return (
        <Flex bg="gray.200" direction={{ base: "column", md: "row" }} gap={"20px"} justify="center" align="center" minH="100vh" padding={"0px 25px 0px 25px"} bgColor="#e9e5d9" >
            <Box px={{ base: 4, md: 8 }} py={8} w={{ base: "100%", md: "70%" }}  >
                <Heading as="h1" size="xl" fontWeight={"normal"} mb={4} w="100%" textAlign={"left"}>Advanced Control Test</Heading>
                <Divider color={"white"} border={"1px solid white"} />
                <Heading as="h3" size="md" fontWeight={"normal"} mb={4} mt={4} w="100%" textAlign={"left"}>
                    Overview :
                </Heading>
                <Box overflowX={"hidden"} overflowY={"scroll"} height={"500px"}>
                    <Text fontSize="small" mb={5} w={"100%"} textAlign="left">
                        This test measures your psycho-motor and multi tasking skills. Test takers are asked to adjust airspeed, heading, altitude and slip ball coordinator at the same time to maintain the given target values.
                    </Text>
                    <Text fontSize="small" mb={5} w={"100%"} textAlign="left">
                        Test takers are presented with a basic Primary Flight Display (PFD), which consist of:
                    </Text>
                    <UnorderedList fontSize="small" ml={5} mb={5} w={"100%"} textAlign="left">
                        <ListItem>Flight Director (Altitude and Heading)</ListItem>
                        <ListItem>Airspeed</ListItem>
                        <ListItem>Slip ball coordinator</ListItem>
                    </UnorderedList>
                    <Heading as="h3" size="md" mb={"2"} fontWeight={"normal"} w="100%" textAlign={"left"}>
                        Flight Director :
                    </Heading>
                    <Text fontSize="small" mt={"2"} mb={"2"} w={"100%"} textAlign="left">
                        During the test the flight director constantly change directions and you target is to keep them centered
                        at all time. If you manage to keep them in centered position you will be on the correct targetable heading and altitude.
                    </Text>
                    <Box>
                        <Image src={Gamescreenh} alt="Arrowkeyimg" />
                    </Box>
                    <Box>
                        <Text fontSize="small" mt={"2"} mb={"2"} w={"100%"} textAlign="left">
                            The flight director is controlled by using the keyboard arrow keys or joystick.
                        </Text>
                        <Image src={Joysticandarrowinage} alt="Arrowkeyimg" />
                    </Box>

                    <Heading as="h3" size="md" mb={"2"} fontWeight={"normal"} w="100%" textAlign={"left"}>
                        Airspeed
                    </Heading>
                    <Text fontSize="small" mt={"2"} mb={"2"} w={"100%"} textAlign="left">
                        Test takers are assigned to mantain targetable airspeed during the test. You can see the new target airspeed by
                        either the top numbers above the airspeed tape, or the magenta arrow on the speed tape. You increase speed by
                        pressing <span style={{ fontWeight: "bold" }}>W</span>  on the keyboard, and you reduce speed by pressing <span style={{ fontWeight: "bold" }}>S</span>  on the keyboard.
                        Please Note: if your joystick has a throttle attached to it you can configure the throttle and use it to control airspeed.
                    </Text>
                    
                    <Box>
                        <Image src={Controlimage1} alt="Arrowkeyimg" />
                    </Box>
                    <Heading as="h3" size="md" mb={"2"} fontWeight={"normal"} w="100%" textAlign={"left"}>
                        Altitude
                    </Heading>
                    <Text>
                        You increase altutude by pressing <span style={{ fontWeight: "bold" }}>+</span> key, and you reduce altitude by pressing  <span style={{ fontWeight: "bold" }}>-</span>  key
                        on the keyborad.
                    </Text>
                    <Box>
                        <Image src={Controlimage2} alt="Arrowkeyimg" />
                    </Box>
                    <Heading as="h3" size="md" mb={"2"} fontWeight={"normal"} w="100%" textAlign={"left"}>
                        Slip ball Coordinator
                    </Heading>
                    <Text fontSize="small" mt={"2"} mb={"2"} w={"100%"} textAlign="left">
                        The slip ball coordinator will be displayed underneath the heading tape. Your goal is to keep the slip
                        ball coordinator centered at all the time.
                    </Text>
                    <Text fontSize="small" mt={"2"} mb={"2"} w={"100%"} textAlign="left">
                        The slip ball coordinator is controlled by the letters <span>A</span>and <span>D</span>  on the keyboard, or you can also use rudder pedals to control
                        the movement of the slip ball coordinator.
                    </Text>
                    <Text fontSize="small" mt={"2"} mb={"2"} w={"100%"} textAlign="left">
                        The slip ball coordinator is controlled by pressing on the left and right side of rudder pedals icon on the right side of the screen.
                    </Text>
                    <Box>
                        <Image src={Slipbalsh} alt="Arrowkeyimg" />
                    </Box>
                    <Heading as="h3" size="md" mb={"2"} fontWeight={"normal"} w="100%" textAlign={"left"}>
                        Score
                    </Heading>
                    <Text fontSize="small" mt={"2"} mb={"2"} w={"100%"} textAlign="left">
                        <Text fontSize="small" mt={"2"} mb={"2"} w={"100%"} textAlign="left">
                            The slip ball coordinator is controlled by pressing on the left and right side of rudder pedals icon on the right side of the screen. <br />
                            <i>We strongly recommend that test takers use joystick and rudder pedals for practicing this software.</i>
                        </Text>
                        <Box>
                            <Image src={Recomdeddevice} alt="Arrowkeyimg" />
                        </Box>
                    </Text>
                    <Heading as="h3" size="md" mb={"2"} fontWeight={"normal"} w="100%" textAlign={"left"}>
                        Compatibility
                    </Heading>
                    <Text fontSize="small" mt={"2"} mb={"2"} w={"100%"} textAlign="left">
                        This test is compatible with PC, mobile and tablets.
                    </Text>
                    <Box>
                        <Image src={computer_tablet_phoneimage} alt="Arrowkeyimg" />
                    </Box>
                </Box>
            </Box>
            <Box px={{ base: 4, md: 8 }} py={8} w={{ base: "100%", md: "30%" }} p={"20px"} >
                <Box overflowX={"hidden"} overflowY={"scroll"} maxHeight={"300px"} marginBottom={"20px"}>
                    <Box bg="white" border="2px solid black" borderBottom={"none"} w="100%" p={4}>
                        <Heading as="h3" size="md" fontWeight={"medium"} m="auto" color={"#757575"} w={"80%"} textAlign="left">Easy</Heading>
                        <Text color={"#757575"} fontSize="lg">Your Average Score: <span style={{ "color": "red" }}>{user.easy || 0}%</span></Text>
                        <Text color={"#757575"} fontSize="lg">Global Score: 100%</Text>
                    </Box>
                    <Box bg="white" border="2px solid black" borderBottom={"none"} w="100%" p={4}>
                        <Heading as="h3" size="md" fontWeight={"medium"} m="auto" color={"#757575"} w={"80%"} textAlign="left">Medium</Heading>
                        <Text color={"#757575"} fontSize="lg">Your Average Score: <span style={{ "color": "red" }}>{user.medium || 0}%</span></Text>
                        <Text color={"#757575"} fontSize="lg">Global Score: 98%</Text>
                    </Box>
                    <Box bg="white" border="2px solid black" borderBottom={"none"} w="100%" p={4}>
                        <Heading as="h3" size="md" fontWeight={"medium"} m="auto" color={"#757575"} w={"80%"} textAlign="left">Hard</Heading>
                        <Text color={"#757575"} fontSize="lg">Your Average Score: <span style={{ "color": "red" }}>{user.hard || 0}%</span></Text>
                        <Text color={"#757575"} fontSize="lg">Global Score: 85%</Text>
                    </Box>
                </Box>
                <Box>
                    <Heading size={"md"} as={"h3"} fontWeight="medium" w={"100%"} textAlign="left">Difficulty</Heading>
                    <DifficultyCheckboxGroup />
                </Box>
            </Box>
        </Flex >
    );
}

export default HomePage;
