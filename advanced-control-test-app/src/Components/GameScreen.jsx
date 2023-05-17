import { Box, Flex, Grid, GridItem, Heading, Input, Text } from '@chakra-ui/react'
import React from 'react'

const Startpractice = () => {
    return (
        <>
            <Heading m={"20px"}>StartPractice</Heading>
            <Text color={"red"} >Memorise the data below</Text>
            <Box w={"100%"} display="flex" flexDirection={"column"} alignItems="center">
                <Box
                    bg="#1a1a1a"
                    w="80vw"
                    maxW="800px"
                    position="absolute"
                    borderRadius="10px"
                    border="20px solid silver"
                    boxShadow="inset 0px 0px 10px 0px rgba(255, 255, 255, 0.5)"
                    margin={"auto"}
                    p="25px"
                >
                    <Flex color={"white"} direction="column">
                        <Box display={"grid"} gridTemplateColumns={"repeat(3,1fr)"}>
                            <Text>Altitude</Text>
                            <Text>{"(A)"}</Text>
                            <Input variant="flushed" bg="#333" color="white" />
                        </Box>
                        <Box display={"grid"} gridTemplateColumns={"repeat(3,1fr)"}>
                            <Text>Heading</Text>
                            <Text>{"(H)"}</Text>
                            <Input variant="flushed" bg="#333" color="white" />
                        </Box>
                        <Box display={"grid"} gridTemplateColumns={"repeat(3,1fr)"}>
                            <Text>Radio</Text>
                            <Text>{"(R)"}</Text>
                            <Input variant="flushed" bg="#333" color="white" />
                        </Box>
                        <Box display={"grid"} gridTemplateColumns={"repeat(3,1fr)"}>
                            <Text>Speed</Text>
                            <Text>{"(S)"}</Text>
                            <Input variant="flushed" bg="#333" color="white" />
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </>
    )
}

export default Startpractice