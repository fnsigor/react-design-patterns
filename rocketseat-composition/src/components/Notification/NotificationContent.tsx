import styled from "styled-components";

const ContentWrapper = styled.div`
`;
 interface IProps {
  text: string
 }

export const NotificationContent = ({text}: IProps) => {
  return  <ContentWrapper className="content">
  <p>{text}</p>
</ContentWrapper>
};
