import styled from "styled-components";

const Button = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.3s ease-in-out;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const ArrowButton = styled(Button)`
  background-color: transparent;
  border: none;
  font-weight: bold;

  & svg {
    transition: all 0.3s ease-in-out;
    fill: ${({ theme }) => theme.colors.grayTextColor};
  }

  &:hover svg {
    fill: ${({ theme }) => theme.colors.primary};
  }
`;

export const PageButton = styled(Button)<{ selected: boolean }>`
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.primary : "transparent"};
  color: ${({ selected, theme }) =>
    selected ? theme.colors.white : theme.colors.grayTextColor};

  font-weight: bold;

  &:hover {
    color: ${({ selected, theme }) =>
      selected ? theme.colors.white : theme.colors.primary};
  }
`;
