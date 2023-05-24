import { Box, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import fdGround from "../utills/images/flightdirectorgr.jpg";
import fdCover from "../utills/images/flightDirectorCover.png";
// import fdArrowTop from "../utills/images/fd-arrow-top.png";
// import fdArrowRight from "../utills/images/fd-arrow-right.png";
// import fdArrowBottom from "../utills/images/fd-arrow--bottom.png";
// import fdArrowLeft from "../utills/images/fd-arrow-left.png";

function Director({onScoreChange}) {
    const [arrowDirection, setArrowDirection] = useState("");
    const [lineVPos, setLineVPos] = useState(100.47);
    const [lineHPos, setLineHPos] = useState(58.836);
    const [bgPosX, setBgPosX] = useState(-340.5);
    const [bgPosY, setBgPosY] = useState(-595.5);
    const [qC, setQc] = useState(0);
    const [sc, setSc] = useState(0);

    useEffect(() => {
        const handleKeyDown = (e) => {
            let currentKey = e.key;

            if ((lineVPos >= 95 && lineVPos <= 105) && (lineHPos <= 65 && lineHPos >= 50)) {
                setSc((prev) => prev + 1);
            }



            switch (currentKey) {
                case "ArrowUp":
                    setLineVPos((prev) => prev + 5);
                    setBgPosY(prev => prev - 5)
                    break;
                case "ArrowDown":
                    setLineVPos((prev) => prev - 5);
                    setBgPosY(prev => prev + 5)
                    break;
                case "ArrowLeft":
                    setLineHPos((prev) => prev + 5);
                    setBgPosX(prev => prev - 5)
                    break;
                case "ArrowRight":
                    setLineHPos((prev) => prev - 5);
                    setBgPosX(prev => prev + 5)
                    break;
                default:
                    break;
            }

        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [lineHPos, lineVPos]);

    useEffect(() => {

        if (lineVPos < 0.5) {
            setLineVPos(0.5);
            setBgPosY(prev => prev - 5);
        } else if (lineVPos > 200.5) {
            setLineVPos(200.5);
            setBgPosY(prev => prev + 5);
        }

        if (lineHPos < 0.5) {
            setLineHPos(0.5);
            setBgPosX(prev => prev - 5);
        } else if (lineHPos > 125.5) {
            setLineHPos(122.5);
            setBgPosX(prev => prev + 5);
        }


    }, [lineVPos, lineHPos]);

    useEffect(() => {
        const interval = setInterval(() => {
            // generate a random number between -1 and 1 for both lineHPos and lineVPos
            const randomHPos = Math.floor(Math.random() * 3) - 1;
            const randomVPos = Math.floor(Math.random() * 3) - 1;
            setQc((prev) => prev + 1);
            setLineHPos((prev) => prev + randomHPos * 5);
            setBgPosX(prev => prev - randomHPos * 5);
            setLineVPos((prev) => prev + randomVPos * 5);
            setBgPosY(prev => prev - randomVPos * 5);
        }, 900)
        // Cleanup function to clear the interval
        return () => clearInterval(interval);
    }, [])

    useEffect(()=>{
        let score = Math.floor((sc/qC)*100);
        onScoreChange(score,"directorScore");
    },[sc])


    return (
        <Box
            className="directorscreen"
            pos="relative"
            w="125px"
            h="200px"
            bgImage={`url(${fdGround})`}
            bgPos={`${bgPosX}px ${bgPosY}px`}
            borderRadius={"15px"}
            transition="background-position 0.5s ease-in-out"

        >
            <Box className="lineh" pos="absolute" top="55.5px" left={lineHPos} transition="left 0.5s ease-out, right 0.5s ease-out">
                <Box
                    className="dirline dir-v-line"
                    w="3px"
                    h="100px"
                    bg={(lineHPos <= 65 && lineHPos >= 50)?"green":"red"}
                    borderRadius="full"

                />
            </Box>
            <Box className="linev" pos="absolute" top={lineVPos} left="10.5px" transition="top 0.5s ease-out, bottom 0.5s ease-out">
                <Box
                    className="dirline dir-h-line"
                    w="100px"
                    h="3px"
                    bg={(lineVPos >= 95 && lineVPos <= 105)?"green":"red"}
                    borderRadius="full"

                />
            </Box>
            <Image
                className="director-cover"
                src={fdCover}
                pos="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
            />
            <Image
                className={`dir-arrow director-arrow-${arrowDirection}`}
                src={arrowDirection ? eval(`fdArrow${arrowDirection[0].toUpperCase()}${arrowDirection.slice(1)}`) : ""}
                pos="absolute"
                top="50%"
                // left="50%"
                transform="translate(-50%, -50%)"
                display={arrowDirection ? "block" : "none"}
            />
        </Box>
    );
}

export default Director;
