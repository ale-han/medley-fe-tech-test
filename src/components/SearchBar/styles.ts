import styled from "styled-components";

export const SearchBarWrapper = styled.div<{ focused: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 6px;
  background-color: ${({ focused }) => (focused ? "#88888820" : "white")};
  padding: 8px 12px;
  transition: all 0.25s ease-in-out;
  width: 100%;
`;

export const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.grayTextColor};
  width: 100%;
  display: block;
`;
