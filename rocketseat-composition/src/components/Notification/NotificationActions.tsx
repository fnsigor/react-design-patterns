import { ReactNode } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    gap: 5px;
`;

interface Iprops {
    children: ReactNode;
}
export const NotificationActions = ({ children }: Iprops) => {
    return <Wrapper>{children}</Wrapper>;
};
