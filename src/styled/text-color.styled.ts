import { Box, Theme, styled } from "@mui/material";

interface ColorProps {
  theme: Theme;
}

export const WhiteText = styled(Box)`
  color: white;
`;

export const SecondaryText = styled(Box)<ColorProps>(({ theme }) => ({
  color: theme.palette.secondary.main,
}));

export const TertiaryText = styled(Box)<ColorProps>(({ theme }) => ({
  color: theme.palette.tertiary.main,
}));

export const GreyText = styled(Box)`
  color: #7e7f85;
`;
