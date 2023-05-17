import { Flex, Box, Spacer, useDisclosure, Button } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const isAuth = useSelector((store) => store.authReducer.isAuth);
    const navigate= useNavigate()
    const handleLogin = () => {
        if (isAuth) {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            window.location.reload();
        }else{
           navigate("/login") 
        }
    }

    return (
        <Flex
            position="sticky"
            top="0"
            left="0"
            right="0"
            zIndex="100"
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            bgGradient="linear(to-r, #0f0c29, #302b63, #24243e)"
            color="white"
            padding="0 10px"
            boxShadow="md"
        >
            <Flex align="center">
                <Box>
                    <Link to={"/"}>
                        <img
                            src="https://theeducationtimes.in/wp-content/uploads/2022/05/a7b089ea-b385-40e7-b1e2-f29cbd20906e-1.jpg"
                            alt="Logo"
                            width={"100px"}
                            rounded="full"
                        />
                    </Link>
                </Box>
            </Flex>

            <Spacer />

            <Box display={{ base: "block", md: "none" }} onClick={isOpen ? onClose : onOpen}>
                {isOpen ? <CloseIcon color="white" size="24px" /> : <HamburgerIcon color="white" size="24px" />}
            </Box>

            <Box
                display={{ base: isOpen ? "flex" : "none", md: "flex" }}
                flexDirection={{ base: "column", md: "row" }}
                width={{ base: "full", md: "auto" }}
                alignItems={{ base: "center", md: "stretch" }}
                flexGrow={1}
                mt={{ base: 2, md: 0 }}
                justifyContent={{ base: "flex-start", md: "flex-end" }}
            >
                <Box
                    padding={2}
                    marginLeft={{ base: 0, md: 6 }}
                    _hover={{ bg: "white", color: "blue", fontWeight: "bold" }}
                >
                    <Box fontSize="xl" texttransform="uppercase" letterSpacing="wide" onClick={handleLogin}>
                        {isAuth ? "Logout" : "Login"}
                    </Box>
                </Box>
                <Box
                    padding={2}
                    marginLeft={{ base: 0, md: 6 }}
                    _hover={{ bg: "white", color: "blue", fontWeight: "bold" }}
                >
                    <Link to="/signup" fontSize="xl" fontWeight="bold" texttransform="uppercase" letterSpacing="wide">
                        Signup
                    </Link>
                </Box>
            </Box>
        </Flex>
    );
};

export default Navbar;
