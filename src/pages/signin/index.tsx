import React from "react";
import { FiMail, FiLock } from "react-icons/fi";

import { Container, Content } from "./styles";

import Input from "../../Components/Input";
import Button from "../../Components/Button";

const Signin: React.FC = () => {
  return (
    <Container>
      <Content>
        <form>
          <h1>Faça seu login</h1>

          <Input
            icon={FiMail}
            name="email"
            placeholder="E-mail"
            autoComplete="false"
          />

          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Acessar</Button>

          <a href="forgot">Esqueci minha senha</a>
        </form>
      </Content>
    </Container>
  );
};

export default Signin;
