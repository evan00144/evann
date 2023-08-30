import { Box, Stack, Typography } from "@mui/material";
import InformationIcon from "../../../icons/InformationIcon";
import GearIcon from "../../../icons/GearIcon";
import UserGearIcon from "../../../icons/UserGearIcon";
import EmbedIcon from "../../../icons/EmbedIcon";
import GlobeIcon from "../../../icons/GlobeIcon";
import CloseIcon from "../../../icons/CloseIcon";
import OpenNewIcon from "../../../icons/OpenNewIcon";
import LockIcon from "../../../icons/LockIcon";

interface iProjectSidebar {
  handleCloseSidebar: () => void;
  item: {
    title: string;
    content: string;
    thumbnail: string;
    about: string;
    implementation: string;
    role: string;
    tech: string[];
    website?: string;
    img: string[];
  };
}

interface iInformationBox {
  title: string;
  icon: any;
  content?: string | string[];
  contentBold?: boolean;
}
const InformationBox = ({
  title,
  icon,
  content,
  contentBold,
}: iInformationBox) => {
  return (
    <Box marginTop={"2.25rem"}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        sx={{
          color: (theme) => theme.palette.text.primary,
        }}
        spacing={".5rem"}
      >
        {icon}
        <Typography variant={"body2"} fontWeight={700}>
          {title}
        </Typography>
      </Stack>
      {typeof content !== "string" ? (
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          marginTop={".5rem"}
          alignItems={"center"}
          gap={1}
        >
          {content?.map((item) => (
            <Box
              fontWeight={contentBold ? 700 : 300}
              sx={{
                background: (theme) => theme.palette.mode == "dark" ?theme.palette.primary.main : theme.palette.primary.light,
                color: (theme) => theme.palette.text.primary,
                fontWeight: "700",
                borderRadius: "30rem",
                padding: ".5rem 1rem",
              }}
            >
              {item}
            </Box>
          ))}
        </Stack>
      ) : (
        <Typography
          marginTop={".3rem"}
          variant={"body1"}
          whiteSpace={"pre-line"}
          fontWeight={contentBold ? 700 : 300}
          color={"textSecondary"}
        >
          {content}
        </Typography>
      )}
    </Box>
  );
};

export default function ProjectSidebar({
  handleCloseSidebar,
  item,
}: iProjectSidebar) {
  return (
    <Box position={"relative"} right={0} top={0} sx={{
      width: "30%",
      ['@media (max-width: 1200px)']: { 
        width: "50%",
      }
    }}>
      <Box
      id="project-sidebar"
        padding={"2.25rem 1.5rem"}
        sx={{
          background: (theme) =>
            theme.palette.mode === "dark"
              ? "linear-gradient(180deg, rgba(64,176,132,1) 80%, rgba(24,33,69,1) 100%)"
              : "linear-gradient(180deg, rgba(157, 142, 254,1) 80%, rgba(64, 176, 132,0) 100%)",
          width: "100%",
          height: "100%",
          overflowY: "scroll",

          "&::-webkit-scrollbar-track": {
            WebkitBoxShadow: "inset 0 0 6px transparent",
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
            WebkitBoxShadow: "inset 0 0 6px transparent",
            backgroundColor: "transparent",
            marginRight: "1.5rem",
          },
        }}
      >
        <Box paddingBottom={"7rem"} sx={{}}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant={"h5"} fontWeight={700}>
              {item?.title}
            </Typography>
            <Box
              sx={{
                cursor: "pointer",
                color: (theme) => theme.palette.text.primary,
              }}
              onClick={handleCloseSidebar}
            >
              <CloseIcon />
            </Box>
          </Stack>
          <InformationBox
            title={"About"}
            icon={<InformationIcon />}
            content={item?.about}
          />
          <InformationBox
            title={"Project Implementation"}
            icon={<GearIcon />}
            content={item?.implementation}
          />
          <InformationBox
            title={"My Role"}
            icon={<UserGearIcon />}
            content={item?.role}
          />
          <InformationBox
            title={"Technologies"}
            icon={<EmbedIcon />}
            content={item?.tech}
          />
          {item?.website && (
            <InformationBox
              title={"Website"}
              icon={<GlobeIcon />}
              content={item?.website}
              contentBold={true}
            />
          )}
          {item?.img?.map((src: string, i: number) => (
            <Box
              key={i}
              sx={{
                width: "100%",
                height: "fit-content",
                marginTop: "1rem",
                "&:first-child": {
                  marginTop: "0",
                },
              }}
            >
              <img
                src={src}
                alt=""
                style={{
                  width: "100%",
                  height: "fit-content",
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
      {/* Footer */}
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        spacing={".35rem"}
        onClick={() => {
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          window.open(`https://${item?.website}`, "_blank");
        }}
        sx={{
          background: (theme) => theme.palette.secondary.light,
          position: "sticky",
          bottom: 0,
          left: 0,
          width: "100%",
          cursor: item?.website === "-" ? "" : "pointer",
          pointerEvents: item?.website === "-" ? "none" : "all",
          padding: "1rem",
        }}
      >
        {item?.website === "-" || !item?.website  ? (
          <>
            <Typography
              variant={"body1"}
              component={"span"}
              fontWeight={700}
              sx={{
                textDecoration: "underline",
                lineHeight: "1",
                minHeight: "0",
              }}
              color={"textSecondary"}
            >
              <LockIcon />
            </Typography>
            <Typography
              variant={"body1"}
              fontWeight={700}
              color={"textSecondary"}
              sx={{
                lineHeight: "1",
              }}
            >
              Confidential
            </Typography>
          </>
        ) : (
          <>
            <Typography
              variant={"body1"}
              fontWeight={700}
              color={"textSecondary"}
              sx={{
                textDecoration: "underline",
                lineHeight: "1",
              }}
            >
              Open Link
            </Typography>
            <Typography
              variant={"body1"}
              component={"span"}
              fontWeight={700}
              sx={{
                textDecoration: "underline",
                lineHeight: "1",
                minHeight: "0",
              }}
              color={"textSecondary"}
            >
              <OpenNewIcon />
            </Typography>
          </>
        )}
      </Stack>
    </Box>
  );
}
