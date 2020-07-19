import React, { InputHTMLAttributes } from "react";
import { IconBaseProps } from "react-icons";
import styled from "styled-components";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => {
  return (
    <Container>
      {Icon && <Icon size={23} color="#fff" />}
      <input {...rest} />
    </Container>
  );
};

const Container = styled.div`
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;
  color: #f4ede8;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }
  input {
    background: transparent;
    border: 0;
    flex: 1;
  }
  svg {
    margin-right: 16px;
  }
`;

export default Input;
