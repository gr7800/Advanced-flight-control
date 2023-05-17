import { useState, useEffect } from "react";
import { Flex, Box, Heading, FormControl, FormLabel, Input, Button, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, useDisclosure } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { forgetpassword, login } from "../Redux/Auth/auth.action";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [secretKey, setSecretkey] = useState("");
    const isAuth = useSelector((store) => store.authReducer.isAuth);
    const adminAuth = useSelector((store) => store.authReducer.adminAuth);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");
    const [forgotPasswordSecretKey, setForgotPasswordSecretKey] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        if (email.length > 0 && password.length > 0 && secretKey.length > 0) {
            dispatch(login({ email: email, password: password, secretKey: secretKey }));
        } else {
            alert("Please fill all details properly");
        }
    };

    const handleForgotPasswordSubmit = async(event) => {
        event.preventDefault();
        if (forgotPasswordEmail.length > 0 && forgotPasswordSecretKey.length > 0 && newPassword.length > 0) {
            const data = {
                email: forgotPasswordEmail,
                secretKey: forgotPasswordSecretKey,
                newPassword: newPassword,
            };
            let res = await forgetpassword(data)
            if(res){
                onClose();
            }
        } else {
            alert("Please fill all details properly");
        }
    };

    useEffect(() => {
        if (adminAuth) {
            navigate("/admin");
        } else if (isAuth) {
            navigate("/");
        }
    }, [adminAuth, isAuth, navigate]);

    return (
        <Flex direction={{ base: "column", md: "row" }}>
            <Box w={{ base: "100%", md: "50%" }}>
                <img
                    src="https://gamerwall.pro/uploads/posts/2022-09/1663071203_30-gamerwall-pro-p-samolet-v-oblakakh-vkontakte-54.jpg"
                    alt="Background"
                    width={"100%"}
                />
            </Box>
            <Box w={{ base: "100%", md: "50%" }} flex="1" py={{ base: 8, md: 16 }} px={{ base: 4, md: 8 }} bg="white">
                <Heading as="h2" size="xl" mb={{ base: 8, md: 12 }}>
                    Log In
                </Heading>
                <form onSubmit={handleLoginSubmit}>
                    <FormControl id="email" mb={4}>
                        <FormLabel>Email</FormLabel>
                        <Input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </FormControl>
                    <Text
                        width={"100%"}
                        textAlign={"right"}
                        fontWeight={"normal"}
                        _hover={{ color: "red" }}
                        color={"blue"}
                        lineHeight={"0p"}
                        textDecoration={"underline"}
                        onClick={onOpen}
                        cursor="pointer"
                        padding={"5px"}
                        mb={"-5px"}
                    >
                        Forget Password
                    </Text>
                    <FormControl id="password" mb={4}>
                        <FormLabel>Password</FormLabel>
                        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </FormControl>
                    <FormControl id="secretKey" mb={4}>
                        <FormLabel>Secret Key</FormLabel>
                        <Input type="password" value={secretKey} onChange={(e) => setSecretkey(e.target.value)} />
                    </FormControl>
                    <Button type="submit" colorScheme="blue" width="100%" mb={6}>
                        Log In
                    </Button>
                </form>
                <Text>
                    Don't have an account?{" "}
                    <Link to="/signup" color="blue" fontWeight="bold">
                        Sign Up
                    </Link>
                </Text>
            </Box>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Forgot Password?</ModalHeader>
                    <ModalBody>
                        <form onSubmit={handleForgotPasswordSubmit}>
                            <FormControl id="forgotPasswordEmail" mb={4}>
                                <FormLabel>Email</FormLabel>
                                <Input type="text" value={forgotPasswordEmail} onChange={(e) => setForgotPasswordEmail(e.target.value)} />
                            </FormControl>
                            <FormControl id="forgotPasswordSecretKey" mb={4}>
                                <FormLabel>Secret Key</FormLabel>
                                <Input type="password" value={forgotPasswordSecretKey} onChange={(e) => setForgotPasswordSecretKey(e.target.value)} />
                            </FormControl>
                            <FormControl id="newPassword" mb={4}>
                                <FormLabel>New Password</FormLabel>
                                <Input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                            </FormControl>
                            <Button type="submit" colorScheme="blue" width="100%" mb={6}>
                                Reset Password
                            </Button>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="gray" mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Flex>
    );
}
export default LoginPage;