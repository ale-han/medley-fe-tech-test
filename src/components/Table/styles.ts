import styled from "styled-components";

export const TableWrapper = styled.div`
  width: 100%;
  overflow: auto;
`;

export const TableContent = styled.table`
  border-collapse: collapse;
  width: 100%;
  min-width: 670px;
`;

export const TableContentTR = styled.tr`
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #eee;
  }
`;

export const THText = styled.th`
  padding: 16px 24px;
  color: ${({ theme }) => theme.colors.grayTextColor};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: -0.12px;
  text-align: left;
`;

export const THValue = styled(THText)`
  text-align: right;
`;

export const TD = styled.td`
  padding: 12px 24px;
`;

export const TDText = styled(TD)`
  color: ${({ theme }) => theme.colors.grayTextColor};
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.14px;
  text-align: left;
`;

export const TDValueText = styled(TDText)`
  text-align: right;
  color: ${({ theme }) => theme.colors.text};
`;

export const TDNoData = styled(TDText)`
  text-align: center;
  font-size: 18px;
  height: 250px;
`;
