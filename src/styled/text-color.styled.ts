import { Box } from "@mui/material";
import styled from "styled-components";

export const WhiteText = styled(Box)`
color: ${props => props.theme.palette.mode === 'dark' ? 'white' : props.theme.palette.blue.main} !important;

`;

export const SecondaryText = styled(Box)`
  color: ${props => props.theme.palette.green.main} !important;
`;

export const SecondaryTextLink = styled.a`
  color: ${props => props.theme.palette.green.main} !important;
`;

export const TertiaryText = styled(Box)`
  color: ${props => props.theme.palette.tertiary.main};
`;
export const GreyText = styled(Box)`
  color: #7e7f85;
`;
