import { Paper } from "@material-ui/core";
import styled from "styled-components";
import style from "styled-theming";

const getBackground = style("mode", {
  light: "#fafafa",
  dark: "#111",
});

export const StyledPaper = styled(Paper)`
  background-color: ${getBackground};
`;
