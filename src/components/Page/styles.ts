import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const PageTitle = styled.h1`
  font-size: 40px;
  font-weight: 600;
  line-height: 48px;
  letter-spacing: -0.8px;
  color: ${({ theme }) => theme.colors.secondaryTextColor};
`;

export const PageWrapper = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  ${device.md} {
    padding: 40px 20px;
  }
`;
