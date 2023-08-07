import { keyframes } from "@mui/material";

export const animatedTextFadeUp = keyframes`
0% {
  opacity: 0;
  transform: translateY(100%);
  visibility: hidden;
}
100% {
  opacity: 1;
  transform: translateY(0);
  visibility: visible;
}
`;
