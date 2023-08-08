import { Box } from "@mui/material";
import styled from "styled-components";

export const WhiteText = styled(Box)`
  color: white;
`;

export const SecondaryText = styled(Box)`
  color: ${props => props.theme.palette.secondary.main};
`;

export const TertiaryText = styled(Box)`
  color: ${props => props.theme.palette.tertiary.main};
`;
export const GreyText = styled(Box)`
  color: #7e7f85;
`;
