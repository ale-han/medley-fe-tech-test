import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const TableHeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;

  ${device.sm} {
    flex-direction: column;
  }
`;

export const TableTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const TableTitleMarker = styled.div`
  border-radius: 4px;
  height: 100%;
  width: 16px;
  height: 32px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const TableTitleContent = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -0.4px;
`;

export const SearchBarContainer = styled.div`
  width: 100%;
  max-width: 300px;

  ${device.sm} {
    width: 100%;
    max-width: 100%;
  }
`;

export const TableContainer = styled.div`
  position: relative;
`;

export const SpinnerWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: transparent;
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export const TableFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  ${device.sm} {
    flex-direction: column;
  }
`;
