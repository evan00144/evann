import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import CardItem from "./CardItem";
import { useState } from "react";

export default function SectionThreePage() {
  const [openSidebar, setOpenSidebar] = useState(false);

  const project = [
    {
      title: "Job Portal",
      content:
        " lorem ipsum dolor sit amet consectetur. Risus tincidunt gravida habitant nunc enim nunc ultrices volutpat. Volutpat eget convallis tincidunt in viverra. Turpis magna vestibulum tempus tellus. Diam laoreet tellus orci mattis eget odio aliquam.",
      img: "/img/jobportal/thumbnail.png",
    },
    {
      title: "Sidesa Workspace",
      content:
        " lorem ipsum dolor sit amet consectetur. Risus tincidunt gravida habitant nunc enim nunc ultrices volutpat. Volutpat eget convallis tincidunt in viverra. Turpis magna vestibulum tempus tellus. Diam laoreet tellus orci mattis eget odio aliquam.",
      img: "/img/jobportal/thumbnail.png",
    },
    {
      title: "AMS",
      content:
        " lorem ipsum dolor sit amet consectetur. Risus tincidunt gravida habitant nunc enim nunc ultrices volutpat. Volutpat eget convallis tincidunt in viverra. Turpis magna vestibulum tempus tellus. Diam laoreet tellus orci mattis eget odio aliquam.",
      img: "/img/jobportal/thumbnail.png",
    },
    {
      title: "Eb Chat",
      content:
        " lorem ipsum dolor sit amet consectetur. Risus tincidunt gravida habitant nunc enim nunc ultrices volutpat. Volutpat eget convallis tincidunt in viverra. Turpis magna vestibulum tempus tellus. Diam laoreet tellus orci mattis eget odio aliquam.",
      img: "/img/jobportal/thumbnail.png",
    },
    {
      title: "Sidesa",
      content:
        " lorem ipsum dolor sit amet consectetur. Risus tincidunt gravida habitant nunc enim nunc ultrices volutpat. Volutpat eget convallis tincidunt in viverra. Turpis magna vestibulum tempus tellus. Diam laoreet tellus orci mattis eget odio aliquam.",
      img: "/img/jobportal/thumbnail.png",
    },
    {
      title: "Thesis",
      content:
        " lorem ipsum dolor sit amet consectetur. Risus tincidunt gravida habitant nunc enim nunc ultrices volutpat. Volutpat eget convallis tincidunt in viverra. Turpis magna vestibulum tempus tellus. Diam laoreet tellus orci mattis eget odio aliquam.",
      img: "/img/jobportal/thumbnail.png",
    },
  ];
  return (
    <Stack
      position={"relative"}
      direction={"row"}
      justifyContent={"end"}
      sx={{
        [openSidebar ? "height" : "minHeight"]: "100vh",
        overflow: "hidden",
      }}
    >
      <Stack
        sx={{
          position: openSidebar ? "absolute" : "",
          "&::-webkit-scrollbar-track": {
            WebkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.3)",
            borderRadius: "10px",
            backgroundColor: "transparent",
            marginRight: "1.5rem",
          },
          "&::-webkit-scrollbar": {
            width: "7px",
            height: "7px",
            backgroundColor: "transparent",
            marginRight: "1.5rem",
          },
          "&::-webkit-scrollbar-thumb": {
            borderRadius: "10px",
            WebkitBoxShadow: "inset 0 0 6px rgba(0,0,0,.3)",
            backgroundColor: "#555",
            marginRight: "1.5rem",
          },
        }}
        left={0}
        width={openSidebar ? "70%" : "100%"}
        height={"100%"}
        overflow={"scroll"}
        padding={"5rem 0 2rem 0"}
      >
        <Container maxWidth="lg" sx={{}}>
          <Grid container spacing={4.5}>
            {project.map((proj, i) => (
              <Grid item key={i} sm={openSidebar ? 6 : 4}>
                <CardItem
                  handleClick={() => setOpenSidebar(true)}
                  title={proj.title}
                  bg={` ${
                    i % 2 !== 0
                      ? "linear-gradient(180deg, rgba(5,7,15,.2) 20%, rgba(157,142,254,.2) 100%"
                      : "linear-gradient(180deg, rgba(5,7,15,.2) 20%, rgba(64,176,132,.2) 100%"
                  });
                `}
                  content={proj.content}
                  // img="/logo-dark.svg"
                  img="/img/jobportal/thumbnail.png"
                  index={i}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Stack>
      {openSidebar && (
        <Box
          right={0}
          position={"relative"}
          top={0}
          padding={"2.25rem 1.5rem"}
          sx={{
            background: (theme) => theme.palette.secondary.main,
            width: "30%",
            height: "100%",
          }}
        >
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant={"h5"} fontWeight={700} color={"textSecondary"}>
              Job Portal
            </Typography>
            <Box
              sx={{
                cursor: "pointer",
              }}
              onClick={() => setOpenSidebar(false)}
            >
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.585797 1.0858C1.36686 0.304734 2.63321 0.304734 3.41428 1.0858L12.0002 9.67174L20.5862 1.0858C21.3672 0.304734 22.6336 0.304734 23.4146 1.0858C24.1957 1.86686 24.1957 3.13321 23.4146 3.91428L14.8287 12.5002L23.4146 21.0862C24.1957 21.8672 24.1957 23.1336 23.4146 23.9146C22.6336 24.6957 21.3672 24.6957 20.5862 23.9146L12.0002 15.3287L3.41428 23.9146C2.63321 24.6957 1.36686 24.6957 0.585797 23.9146C-0.195266 23.1336 -0.195266 21.8672 0.585797 21.0862L9.17174 12.5002L0.585797 3.91428C-0.195266 3.13321 -0.195266 1.86686 0.585797 1.0858Z"
                  fill="#182145"
                />
              </svg>
            </Box>
          </Stack>
          <Box>
            <Stack direction={"row"} alignItems={"center"} spacing={".5rem"}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.0978 21.9664C15.4632 21.9664 15.7717 21.8388 16.0231 21.5835C16.2744 21.3283 16.4001 21.0114 16.4001 20.6331V14.9664C16.4001 14.6098 16.274 14.3039 16.0216 14.0489C15.7692 13.7939 15.4636 13.6664 15.1048 13.6664C14.746 13.6664 14.4333 13.7939 14.1667 14.0489C13.9001 14.3039 13.7668 14.6098 13.7668 14.9664V20.6331C13.7668 21.0114 13.8973 21.3283 14.1582 21.5835C14.4192 21.8388 14.7324 21.9664 15.0978 21.9664ZM14.9995 11.7664C15.4555 11.7664 15.8307 11.6231 16.1251 11.3364C16.4196 11.0498 16.5668 10.684 16.5668 10.2389C16.5668 9.72505 16.4203 9.32894 16.1274 9.05061C15.8345 8.77227 15.4609 8.63311 15.0066 8.63311C14.5023 8.63311 14.114 8.77033 13.8418 9.04477C13.5696 9.31919 13.4335 9.70225 13.4335 10.1939C13.4335 10.6667 13.5805 11.047 13.8745 11.3348C14.1686 11.6226 14.5436 11.7664 14.9995 11.7664ZM14.9983 29.0331C13.0638 29.0331 11.2399 28.6708 9.52676 27.9463C7.81356 27.2218 6.32086 26.2234 5.04866 24.9512C3.77646 23.679 2.77811 22.1856 2.0536 20.4709C1.32906 18.7562 0.966797 16.9285 0.966797 14.9877C0.966797 13.0493 1.32971 11.2278 2.05553 9.52324C2.78137 7.81866 3.78363 6.32696 5.0623 5.04814C6.34096 3.76932 7.83265 2.76377 9.53736 2.03151C11.2421 1.29924 13.0612 0.933105 14.9947 0.933105C16.9362 0.933105 18.7645 1.29819 20.4795 2.02837C22.1945 2.75855 23.6878 3.76141 24.9595 5.03694C26.2312 6.31247 27.2336 7.80707 27.9669 9.52074C28.7002 11.2344 29.0668 13.0638 29.0668 15.009C29.0668 16.9527 28.7007 18.7736 27.9684 20.4717C27.2361 22.1698 26.2306 23.6562 24.9518 24.9311C23.6729 26.2059 22.1794 27.2083 20.4711 27.9382C18.7628 28.6681 16.9385 29.0331 14.9983 29.0331Z"
                  fill="#182145"
                />
              </svg>

              <Typography
                variant={"body2"}
                fontWeight={700}
                color={"textSecondary"}
              >
                About
              </Typography>
            </Stack>
            <Typography
              variant={"body1"}
              fontWeight={300}
              color={"textSecondary"}
            >
              Job portal is a website project that provides a platform for
              submitting job applications to companies. This website is created
              to enhance the experience of applying for jobs at companies,
              making it clearer and more engaging. It also facilitates
              applicants in uploading their resumes. The design of the website
              is modern and responsive.
            </Typography>
          </Box>
          <Box>
            <Stack direction={"row"} alignItems={"center"} spacing={".5rem"}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.3666 30.0331H13.6333C13.2333 30.0331 12.8833 29.922 12.5833 29.6998C12.2833 29.4776 12.1222 29.1553 12.1 28.7331L11.6 25.5998C11.2888 25.5109 10.9444 25.3553 10.5666 25.1331C10.1888 24.9109 9.87774 24.6998 9.63329 24.4998L6.76662 25.8664C6.43329 26.0442 6.07218 26.0664 5.68329 25.9331C5.2944 25.7998 4.99996 25.5442 4.79996 25.1664L2.43329 20.9331C2.18885 20.5998 2.12218 20.2442 2.23329 19.8664C2.3444 19.4887 2.5444 19.1887 2.83329 18.9664L5.49996 16.9998C5.47773 16.8887 5.46662 16.7276 5.46662 16.5164V15.5164C5.46662 15.3276 5.47773 15.1553 5.49996 14.9998L2.83329 13.0331C2.5444 12.7887 2.3444 12.4831 2.23329 12.1164C2.12218 11.7498 2.17773 11.3887 2.39996 11.0331L4.79996 6.79977C5.02218 6.46644 5.32218 6.23866 5.69996 6.11644C6.07773 5.99422 6.43329 6.01088 6.76662 6.16644L9.69996 7.49977C9.92218 7.34422 10.2222 7.15533 10.6 6.93311C10.9777 6.71088 11.3111 6.55533 11.6 6.46644L12.1 3.23311C12.1222 2.83311 12.2888 2.51644 12.6 2.28311C12.9111 2.04977 13.2555 1.93311 13.6333 1.93311H18.3666C18.7444 1.93311 19.0888 2.04977 19.4 2.28311C19.7111 2.51644 19.8888 2.83311 19.9333 3.23311L20.4 6.43311C20.7333 6.52199 21.0833 6.67755 21.45 6.89977C21.8166 7.12199 22.1222 7.32199 22.3666 7.49977L25.2333 6.13311C25.5666 5.97755 25.9277 5.96644 26.3166 6.09977C26.7055 6.23311 27 6.46644 27.2 6.79977L29.6333 10.9998C29.8555 11.3553 29.9111 11.722 29.8 12.0998C29.6888 12.4776 29.4888 12.7887 29.2 13.0331L26.4666 14.8998C26.4888 15.0776 26.5166 15.2664 26.55 15.4664C26.5833 15.6664 26.6 15.8442 26.6 15.9998C26.6 16.1553 26.5833 16.3276 26.55 16.5164C26.5166 16.7053 26.4888 16.8776 26.4666 17.0331L29.2 18.9331C29.4888 19.1998 29.6833 19.5164 29.7833 19.8831C29.8833 20.2498 29.8333 20.6109 29.6333 20.9664L27.2 25.1998C26.9777 25.5776 26.6777 25.8276 26.3 25.9498C25.9222 26.072 25.5666 26.0442 25.2333 25.8664L22.3666 24.4998C22.1222 24.6998 21.8055 24.9164 21.4166 25.1498C21.0277 25.3831 20.7 25.5331 20.4333 25.5998L19.9333 28.7331C19.8888 29.1553 19.7111 29.4776 19.4 29.6998C19.0888 29.922 18.7444 30.0331 18.3666 30.0331ZM15.9666 20.2331C17.1444 20.2331 18.1444 19.822 18.9666 18.9998C19.7888 18.1776 20.2 17.1776 20.2 15.9998C20.2 14.8442 19.7888 13.8498 18.9666 13.0164C18.1444 12.1831 17.1444 11.7664 15.9666 11.7664C14.7666 11.7664 13.7611 12.1831 12.95 13.0164C12.1388 13.8498 11.7333 14.8442 11.7333 15.9998C11.7333 17.1776 12.1388 18.1776 12.95 18.9998C13.7611 19.822 14.7666 20.2331 15.9666 20.2331Z"
                  fill="#182145"
                />
              </svg>

              <Typography
                variant={"body2"}
                fontWeight={700}
                color={"textSecondary"}
              >
                Project Implementation
              </Typography>
            </Stack>
            <Typography
              variant={"body1"}
              fontWeight={300}
              color={"textSecondary"}
            >
              Project Intern
            </Typography>
          </Box>
          <Box>
            <Stack direction={"row"} alignItems={"center"} spacing={".5rem"}>
              <svg
                width="22"
                height="23"
                viewBox="0 0 33 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.4 14.4667C11.7111 14.4667 10.3278 13.9278 9.25 12.85C8.17222 11.7722 7.63333 10.4 7.63333 8.73333C7.63333 7.04444 8.17222 5.66667 9.25 4.6C10.3278 3.53333 11.7111 3 13.4 3C15.0667 3 16.4444 3.53333 17.5333 4.6C18.6222 5.66667 19.1667 7.04444 19.1667 8.73333C19.1667 10.4 18.6222 11.7722 17.5333 12.85C16.4444 13.9278 15.0667 14.4667 13.4 14.4667ZM3.53333 26.5667C3.08889 26.5667 2.72222 26.4278 2.43333 26.15C2.14444 25.8722 2 25.5111 2 25.0667V22.6667C2 21.6889 2.27222 20.8333 2.81667 20.1C3.36111 19.3667 3.98889 18.8333 4.7 18.5C6.25556 17.7889 7.76667 17.2667 9.23333 16.9333C10.7 16.6 12.0889 16.4333 13.4 16.4333C13.5111 16.4333 13.7111 16.4389 14 16.45C14.2889 16.4611 14.5111 16.4556 14.6667 16.4333C14.4667 16.7667 14.2389 17.2778 13.9833 17.9667C13.7278 18.6556 13.5667 19.2667 13.5 19.8C13.3889 20.2444 13.3389 20.8389 13.35 21.5833C13.3611 22.3278 13.4444 22.9778 13.6 23.5333C13.7111 24.1778 13.9389 24.7667 14.2833 25.3C14.6278 25.8333 14.9556 26.2556 15.2667 26.5667H3.53333ZM23.8333 23.0667C24.5667 23.0667 25.1556 22.8444 25.6 22.4C26.0444 21.9556 26.2667 21.3556 26.2667 20.6C26.2667 19.8667 26.0444 19.2722 25.6 18.8167C25.1556 18.3611 24.5667 18.1333 23.8333 18.1333C23.0778 18.1333 22.4778 18.3611 22.0333 18.8167C21.5889 19.2722 21.3667 19.8667 21.3667 20.6C21.3667 21.3556 21.5889 21.9556 22.0333 22.4C22.4778 22.8444 23.0778 23.0667 23.8333 23.0667ZM22.3333 25.3333C21.9778 25.2667 21.6278 25.1333 21.2833 24.9333C20.9389 24.7333 20.6444 24.5 20.4 24.2333L19.0667 24.5333C18.8889 24.6 18.7167 24.5889 18.55 24.5C18.3833 24.4111 18.2444 24.3111 18.1333 24.2L17.7333 23.4333C17.6222 23.2778 17.5833 23.1 17.6167 22.9C17.65 22.7 17.7333 22.5444 17.8667 22.4333L19.0333 21.3C18.9444 21.1667 18.9056 20.9389 18.9167 20.6167C18.9278 20.2944 18.9667 20.0667 19.0333 19.9333L17.8667 18.8C17.7333 18.6889 17.65 18.5333 17.6167 18.3333C17.5833 18.1333 17.6222 17.9667 17.7333 17.8333L18.1333 17.0333C18.2444 16.9 18.3833 16.8056 18.55 16.75C18.7167 16.6944 18.8889 16.6778 19.0667 16.7L20.4 16.9667C20.6444 16.7444 20.9389 16.5333 21.2833 16.3333C21.6278 16.1333 21.9778 15.9889 22.3333 15.9L22.5667 14.3C22.6111 14.0778 22.6944 13.9056 22.8167 13.7833C22.9389 13.6611 23.1111 13.6 23.3333 13.6H24.3333C24.5333 13.6 24.6944 13.6611 24.8167 13.7833C24.9389 13.9056 25.0333 14.0778 25.1 14.3L25.3333 15.9C25.6667 15.9889 26.0056 16.1389 26.35 16.35C26.6944 16.5611 26.9889 16.7667 27.2333 16.9667L28.6 16.7C28.7556 16.6778 28.9167 16.6944 29.0833 16.75C29.25 16.8056 29.4 16.9111 29.5333 17.0667L29.9333 17.8333C30.0222 17.9667 30.0444 18.1222 30 18.3C29.9556 18.4778 29.8667 18.6556 29.7333 18.8333L28.5667 19.9333C28.7 20.0889 28.7556 20.3222 28.7333 20.6333C28.7111 20.9444 28.6556 21.1667 28.5667 21.3L29.7667 22.4333C29.8778 22.5444 29.95 22.7056 29.9833 22.9167C30.0167 23.1278 30 23.2889 29.9333 23.4L29.4667 24.1667C29.4 24.3222 29.2833 24.4333 29.1167 24.5C28.95 24.5667 28.7889 24.5778 28.6333 24.5333L27.2333 24.2333C26.9889 24.5 26.6944 24.7278 26.35 24.9167C26.0056 25.1056 25.6667 25.2444 25.3333 25.3333L25.1 26.9667C25.0333 27.1667 24.9389 27.3222 24.8167 27.4333C24.6944 27.5444 24.5333 27.6 24.3333 27.6H23.3333C23.1111 27.6 22.9389 27.55 22.8167 27.45C22.6944 27.35 22.6111 27.1778 22.5667 26.9333L22.3333 25.3333Z"
                  fill="#182145"
                />
              </svg>

              <Typography
                variant={"body2"}
                fontWeight={700}
                color={"textSecondary"}
              >
                My Role
              </Typography>
            </Stack>
            <Typography
              variant={"body1"}
              fontWeight={300}
              color={"textSecondary"}
            >
              Implementation of Several Sections on the Page, Engaging Animation
            </Typography>
          </Box>
          <Box>
            <Stack direction={"row"} alignItems={"center"} spacing={".5rem"}>
              <svg
                width="23"
                height="24"
                viewBox="0 0 32 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.0352 16.5997L13.3352 14.2997C13.513 14.0997 13.6074 13.8663 13.6186 13.5997C13.6297 13.333 13.5352 13.0886 13.3352 12.8663C13.113 12.6663 12.8667 12.5663 12.5963 12.5663C12.326 12.5663 12.1056 12.6663 11.9352 12.8663L9.26856 15.4997C9.11098 15.6351 8.98825 15.8059 8.90039 16.0121C8.8125 16.2183 8.76856 16.4154 8.76856 16.6034C8.76856 16.7914 8.8125 16.9876 8.90039 17.192C8.98825 17.3965 9.11098 17.5546 9.26856 17.6663L11.9686 20.3997C12.1686 20.6219 12.4019 20.7219 12.6686 20.6997C12.9352 20.6775 13.1686 20.564 13.3686 20.3592C13.5908 20.1767 13.7019 19.9433 13.7019 19.6592C13.7019 19.3751 13.5908 19.133 13.3686 18.933L11.0352 16.5997ZM21.0019 16.5997L18.6352 18.9663C18.413 19.1663 18.3074 19.4052 18.3186 19.683C18.3297 19.9608 18.4346 20.1886 18.6335 20.3663C18.8101 20.5663 19.0379 20.6663 19.3168 20.6663C19.5957 20.6663 19.8352 20.5663 20.0352 20.3663L22.7686 17.6663C22.9039 17.5531 23.0211 17.3934 23.1201 17.1872C23.2191 16.9811 23.2686 16.784 23.2686 16.596C23.2686 16.408 23.2191 16.2118 23.1201 16.0073C23.0211 15.8029 22.9039 15.6337 22.7686 15.4997L20.0352 12.7997C19.9241 12.733 19.813 12.6719 19.7019 12.6163C19.5908 12.5608 19.4658 12.5275 19.3269 12.5163C19.188 12.5052 19.0658 12.5275 18.9602 12.583C18.8547 12.6386 18.7611 12.696 18.6797 12.7552C18.4723 12.9626 18.3686 13.2108 18.3686 13.4997C18.3686 13.7886 18.4686 14.0219 18.6686 14.1997L21.0019 16.5997ZM6.30189 29.333C5.48467 29.333 4.7748 29.0318 4.17229 28.4293C3.5698 27.8268 3.26855 27.1169 3.26855 26.2997V6.89967C3.26855 6.07327 3.5698 5.35556 4.17229 4.74654C4.7748 4.13752 5.48467 3.83301 6.30189 3.83301H25.7019C26.5283 3.83301 27.246 4.13752 27.855 4.74654C28.464 5.35556 28.7686 6.07327 28.7686 6.89967V26.2997C28.7686 27.1169 28.464 27.8268 27.855 28.4293C27.246 29.0318 26.5283 29.333 25.7019 29.333H6.30189Z"
                  fill="#182145"
                />
              </svg>

              <Typography
                variant={"body2"}
                fontWeight={700}
                color={"textSecondary"}
              >
                Technologies
              </Typography>
            </Stack>
            <Typography
              variant={"body1"}
              fontWeight={300}
              color={"textSecondary"}
            >
              Implementation of Several Sections on the Page, Engaging Animation
            </Typography>
          </Box>
          <Box>
            <Stack direction={"row"} alignItems={"center"} spacing={".5rem"}>
              <svg
                width="24"
                height="25"
                viewBox="0 0 32 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.01 30.6332C14.0479 30.6332 12.2168 30.2776 10.5168 29.5665C8.8168 28.8554 7.32235 27.8499 6.03346 26.5499C4.74457 25.2499 3.74457 23.7449 3.03346 22.0349C2.32235 20.3249 1.9668 18.4858 1.9668 16.5176C1.9668 14.5502 2.32235 12.7165 3.03346 11.0165C3.74457 9.31654 4.74457 7.83876 6.03346 6.5832C7.32235 5.32765 8.81623 4.33876 10.5151 3.61654C12.2139 2.89431 14.0475 2.5332 16.0158 2.5332C17.9831 2.5332 19.8112 2.89431 21.5001 3.61654C23.189 4.33876 24.6779 5.32765 25.9668 6.5832C27.2557 7.83876 28.2612 9.31807 28.9835 11.0211C29.7057 12.7242 30.0668 14.5616 30.0668 16.5332C30.0668 18.4977 29.7057 20.3333 28.9835 22.0399C28.2612 23.7466 27.2557 25.2499 25.9668 26.5499C24.6779 27.8499 23.1865 28.8554 21.4926 29.5665C19.7987 30.2776 17.9712 30.6332 16.01 30.6332ZM15.9668 27.6999C16.7001 26.9443 17.3168 26.061 17.8168 25.0499C18.3168 24.0388 18.7446 22.811 19.1001 21.3665H12.9335C13.2224 22.7221 13.6234 23.9238 14.1366 24.9718C14.6498 26.0198 15.2599 26.9291 15.9668 27.6999ZM13.2668 27.2999C12.7112 26.4999 12.246 25.6185 11.871 24.6557C11.496 23.6929 11.1724 22.5965 10.9001 21.3665H6.03346C6.83346 22.8956 7.77235 24.1111 8.85013 25.0133C9.92791 25.9155 11.4001 26.6776 13.2668 27.2999ZM18.7001 27.2665C20.2779 26.8221 21.6835 26.0776 22.9168 25.0332C24.1501 23.9888 25.1668 22.7665 25.9668 21.3665H21.1715C20.8795 22.5665 20.5335 23.6499 20.1335 24.6165C19.7335 25.5832 19.2557 26.4665 18.7001 27.2665ZM5.4013 19.4999H10.5668C10.4779 18.8999 10.4279 18.3665 10.4168 17.8999C10.4057 17.4332 10.4001 16.9776 10.4001 16.5332C10.4001 15.9776 10.4112 15.4943 10.4335 15.0832C10.4557 14.6721 10.5112 14.1999 10.6001 13.6665H5.4013C5.26719 14.1999 5.1668 14.6665 5.10013 15.0665C5.03346 15.4665 5.00013 15.9554 5.00013 16.5332C5.00013 17.0888 5.03346 17.5888 5.10013 18.0332C5.1668 18.4776 5.26719 18.9665 5.4013 19.4999ZM12.5678 19.4999H19.4668C19.5335 18.811 19.5724 18.2554 19.5835 17.8332C19.5946 17.411 19.6001 16.9776 19.6001 16.5332C19.6001 16.0888 19.5946 15.6721 19.5835 15.2832C19.5724 14.8943 19.5331 14.3554 19.4658 13.6665H12.5668C12.4779 14.3554 12.4224 14.8943 12.4001 15.2832C12.3779 15.6721 12.3668 16.0888 12.3668 16.5332C12.3668 16.9776 12.3779 17.411 12.4001 17.8332C12.4224 18.2554 12.4783 18.811 12.5678 19.4999ZM21.4335 19.4999H26.6001C26.689 18.9665 26.7724 18.4776 26.8501 18.0332C26.9279 17.5888 26.9668 17.0888 26.9668 16.5332C26.9668 15.9554 26.9279 15.4665 26.8501 15.0665C26.7724 14.6665 26.689 14.1999 26.6001 13.6665H21.4668C21.489 14.4888 21.5112 15.0851 21.5335 15.4557C21.5557 15.8263 21.5668 16.1854 21.5668 16.5332C21.5668 16.9999 21.5501 17.4443 21.5168 17.8665C21.4835 18.2888 21.4557 18.8332 21.4335 19.4999ZM21.1382 11.7665H25.9668C25.2112 10.2999 24.2168 9.04431 22.9835 7.99987C21.7501 6.95543 20.3112 6.24431 18.6668 5.86654C19.2224 6.68876 19.7001 7.56654 20.1001 8.49987C20.5001 9.4332 20.8462 10.5221 21.1382 11.7665ZM12.9335 11.7665H19.1335C18.9335 10.6616 18.5501 9.5465 17.9835 8.42117C17.4168 7.29586 16.7446 6.34431 15.9668 5.56654C15.3224 6.12209 14.7612 6.8832 14.2835 7.84987C13.8057 8.81654 13.3557 10.1221 12.9335 11.7665ZM6.03346 11.7665H10.9273C11.1759 10.5888 11.4779 9.53876 11.8335 8.61654C12.189 7.69431 12.6557 6.78876 13.2335 5.89987C11.5668 6.27765 10.1335 6.96654 8.93346 7.96654C7.73346 8.96654 6.7668 10.2332 6.03346 11.7665Z"
                  fill="#182145"
                />
              </svg>

              <Typography
                variant={"body2"}
                fontWeight={700}
                color={"textSecondary"}
              >
                Technologies
              </Typography>
            </Stack>
            <Typography
              variant={"body1"}
              fontWeight={300}
              color={"textSecondary"}
            >
              teslink-hmjp22.vercel.app
            </Typography>
          </Box>
        </Box>
      )}
    </Stack>
  );
}
