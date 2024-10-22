import styled from "styled-components";

const Button = styled.button`
    background-color: ${(props) => props.color};
`;

interface IProps {
    color?: string;
    text?: string;
}

export const NotificationActionButton = ({
    color = "#3d3d3d",
    text,
}: IProps) => {
    return <Button color={color}>{text}</Button>;
};
