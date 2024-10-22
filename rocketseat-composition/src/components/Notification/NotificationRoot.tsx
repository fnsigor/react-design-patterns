import {ReactNode} from 'react'
import styled from "styled-components";

const Wrapper = styled.div`
    background-color: #202020;
    border-radius: 4px;
    border: 1px solid rgb(163, 163, 163);

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

interface IProps {
  children: ReactNode
}
export const NotificationRoot = ({children}: IProps) => {
    return (
      <Wrapper>
        {children}
      </Wrapper>
    )
};
