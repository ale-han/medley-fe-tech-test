import styled from "styled-components";

const Badge = styled.span<{
  status: "success" | "error" | "warning" | "default" | "disabled";
}>`
  padding: 2px 8px;
  border-radius: 6px;

  background-color: ${({ status, theme }) =>
    status === "success"
      ? theme.colors.successBackgroundColor
      : theme.colors.disabledBackgroundColor};

  color: ${({ status, theme }) =>
    status === "success"
      ? theme.colors.successTextColor
      : theme.colors.disabledTextColor};

  font-weight: 600;
`;

export default Badge;
