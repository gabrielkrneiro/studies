import styled from "@emotion/styled";

const defaultFontStyle = `  
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`;

export const Table = styled("table")``;

export const TableHeader = styled("thead")`
  th {
    text-align: left;
  }
`;

export const TableHeaderCell = styled.th<{ size: number }>`
  width: ${(props) => (props.size !== 150 ? props.size : undefined)}px;
  padding: 16px;

  ${defaultFontStyle}
`;

export const TableBody = styled("tbody")``;

export const TableBodyRow = styled("tr")``;

export const TableBodyCell = styled("td")`
  padding: 6px 18px;

  ${defaultFontStyle}
`;

export const MyLogo = styled("div")`
  background-color: red;
  width: 40px;
  height: 40px;
`;

export const Title = styled("b")`
  ${defaultFontStyle}
`;

export const SubTitle = styled("span")`
  color: #707070;

  ${defaultFontStyle};
`;

export const ButtonActions = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    border: none;
    width: 32px;
    height: 32px;
    border-radius: 999px;
    cursor: pointer;

    img {
      width: 16px;
      height: 16px;
    }
  }

  button:hover {
    border: 1px solid #191919;
  }
`;
