import styled from "styled-components";

export const DropDownContainer = styled("div")`
  width: 80px;
`;

export const DropDownHeader = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 8px;
  font-weight: 500;
  font-size: ${props => props.theme.fontSizes.default};
  color: ${props => props.theme.colors.font};
  text-align: center;
  padding: 7px 0;
  background: transparent;
  cursor: pointer;
  transition: 200ms;
  &:hover {
    background-color: ${props => props.theme.colors.hoverBackground};
  }
`;

export const DropDownListContainer = styled("div")``;

export const DropDownList = styled("ul")`
  position: absolute;
  width: 80px;
  padding: 0;
  margin: 0;
  color: ${props => props.theme.colors.font};
  font-size: ${props => props.theme.fontSizes.default};
  font-weight: 500;
  margin-top: 0.8em;
  z-index: 1;
`;

interface IListItemProps {
    isSelected?: boolean,
}


export const ListItem = styled.li<IListItemProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  list-style: none;
  font-weight: ${(props: IListItemProps) => props.isSelected ? "700" : "300"};
  color: ${props => props.theme.colors.font};
  background-color: ${props => props.theme.colors.secondaryBackground};
  border: 1px solid ${props => props.theme.colors.border};
  text-align: center;
  padding: 7px;
  cursor: pointer;
  transition: 200ms;
  &:hover {
    background-color: ${props => props.theme.colors.hoverBackground};
  }
`;