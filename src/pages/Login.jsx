import * as React from 'react';
import {useState} from 'react';
import styled from "styled-components";
import {mobile} from "../responsive";
import {useDispatch} from "react-redux";
import {login} from "../state/apiService";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.2)),
  url("https://images.unsplash.com/photo-1498387727476-b30055b2ef21");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({width: "75%"})}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;


const Login = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const handleLogin = (e) => {
        e.preventDefault();
        login(dispatch, {userName, password});
    }

    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input
                        placeholder="username"
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <Input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button onClick={handleLogin}>Login</Button>
                    <Link>FORGOT YOUR PASSWORD?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Login;
