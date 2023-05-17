import { Box, Image, Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import headingnumberpad from "../utills/images/headingnumberpad.png";
import headingleftscale from "../utills/images/headingleftscale.png";
import headingredpointer from "../utills/images/headingredpointer.png";
import headingrighttscale from "../utills/images/headingrightscale.png";
import slipball_dot from "../utills/images/slipballdot.png"
import slipballbg from "../utills/images/slipballbg.png"

function Heading({onScoreChange}) {
    const [offset, setOffset] = useState(0);
    const [slipoffset, setSlipoffset] = useState(0);
    const [score, setScore] = useState(0);
    const [tq, setTq] = useState(0);

    useEffect(() => {
        let interval = setInterval(() => {
            const randomOffset = Math.random() < 0.5 ? -62 : 62;
            const randomSlipOffset = Math.random() < 0.5 ? -30 : 30;
            setOffset((prevOffset) => prevOffset + randomOffset);
            setSlipoffset((prevSlipOffset) => prevSlipOffset - randomSlipOffset);
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const handleKeyPress = (event) => {
        if (event.key === "a") {
            setOffset((prevOffset) => prevOffset - 62);
            setSlipoffset((prevSlipOffset) => prevSlipOffset + 30);
        } else if (event.key === "d") {
            setOffset((prevOffset) => prevOffset + 62);
            setSlipoffset((prevSlipOffset) => prevSlipOffset - 30);
        }
    };

    useEffect(() => {
        if (offset === 0) {
            setScore((pre) => pre + 1);
            setSlipoffset(0);
        }
        setTq((prev) => prev + 1);
    }, [offset]);

    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress);

        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, []);

    useEffect(() => {
        let temp = Math.floor((score / tq) * 100);
        onScoreChange(temp, "headingScore");
    }, [score])

    return (
        <Box display={"grid"} gridAutoRows={"2,1fr"} gap={"10px"}>
            <Box width="300px" bg={"coral"} overflow="hidden" position="relative" shadow={"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}>
                <Flex
                    mt={"8px"}
                    className="headingsNumPad"
                    alignItems="center"
                    width="46px"
                    position="absolute"
                    left="50%"
                    top="50%"
                    transform="translate(-50%, -50%)"
                    draggable="true"
                    style={{ pointerEvents: "none" }}
                >
                    <Image width="100%" src={headingnumberpad} alt="Number Pad" />
                </Flex>
                <Box position={"relative"}>
                    <Image
                        className="redPointer"
                        width="22px"
                        height="22px"
                        src={headingredpointer}
                        style={{
                            position: "absolute",
                            top: "-10px",
                            left: "50%",
                            transform: `translateX(-50%) translateX(${offset}px)`,
                            transition: "transform 0.3s",
                        }}
                        alt="Red Pointer"
                    />
                </Box>
                <Flex
                    className="headingsBar"
                    alignItems="center"
                    width="4608px"
                    transform={`translateX(${offset}px)`}
                    transition="transform 0.3s"
                >
                    <Box className="wBorder wBorderL" marginLeft={"150px"} />

                    <Flex className="scaleBar" alignItems="center" position="relative" width="100%">
                        <Flex className="scaleSlider" style={{ left: 0, transform: "translateX(-50%)" }}>
                            <Image className="scale" width="50%" height="39px" src={headingleftscale} alt="Scale Image" />
                            <Image className="scale" width="50%" height="39px" src={headingrighttscale} alt="Scale Image" />
                        </Flex>
                        <Image
                            className="redPointer"
                            width="22px"
                            height="9px"
                            src={headingredpointer}
                            style={{
                                position: "absolute",
                                top: "-20px",
                                left: "50%",
                                transform: `translateX(-50%) translateX(${offset}px)`,
                                transition: "transform 0.3s",
                            }}
                            alt="Red Pointer"
                        />
                    </Flex>
                    <Box className="wBorder wBorderR" />

                </Flex>
            </Box>
            <Box className="slipballscroll" bgImage={slipballbg} width={"300px"} bgSize={"300px"}>
                <Box
                    position="relative"
                    height="90%"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Image
                        src={slipball_dot}
                        height={"100%"}
                        alt="slipballdot"
                        style={{
                            transform: `translateX(${Math.min(Math.max(slipoffset, -150), 150)}px)`,
                            transition: "transform 0.3s",
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
}

export default Heading;
