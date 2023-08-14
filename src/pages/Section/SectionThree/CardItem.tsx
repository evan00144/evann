import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import Lottie from "react-lottie";
import animationCircleArrow from "../../../animatedSVG/animationCircleArrow.json";

interface iCardItem {
  title: string;
  content: string;
  img: string;
  bg: string;
  index: number;
  handleClick: () => void;
}
export default function CardItem({
  title,
  content,
  img,
  bg,
  index,
  handleClick
}: iCardItem) {
  const [pauseItem, setPauseItem] = useState(false);
  useEffect(() => {
    setPauseItem(true);

    // Animation Card
    const inner = document.getElementById(`inner-${index}`) as HTMLElement;
    const container = document.getElementById(
      `container-${index}`
    ) as HTMLElement;

    const mouse = {
      _x: 0,
      _y: 0,
      x: 0,
      y: 0,
      updatePosition(event: MouseEvent) {
        const e = event || window.event;
        this.x = e?.clientX - this._x;
        this.y = (e?.clientY - this._y) * -1;
      },
      setOrigin(e: HTMLElement) {
        this._x = e?.offsetLeft + Math.floor(e?.offsetWidth / 2);
        this._y = e?.offsetTop + Math.floor(e?.offsetHeight / 2);
      },
      show() {
        return `(${this.x}, ${this.y})`;
      },
    };
    // Track the mouse position relative to the center of the container.
    mouse.setOrigin(container);

    //-----------------------------------------

    let counter = 0;
    const updateRate = 1;
    const isTimeToUpdate = () => {
      return counter++ % updateRate === 0;
    };

    //-----------------------------------------

    const onMouseEnterHandler = (event: MouseEvent) => {
      update(event);
      setTimeout(() => {
        console.log("s");
        inner.style.transition = "0s";
        container.style.transition = "0s";
      }, 500);
    };

    const onMouseLeaveHandler = () => {
      inner.style.transform = "";
      inner.style.transition = ".5s";
      container.style.transition = ".5s";
    };

    const onMouseMoveHandler = (event: MouseEvent) => {
      if (isTimeToUpdate()) {
        update(event);
      }
    };

    //-----------------------------------------

    const update = (event: MouseEvent) => {
      mouse.updatePosition(event);
      updateTransformStyle(
        (mouse.y / inner.offsetHeight / 2 - 2).toFixed(2),
        (mouse.x / inner.offsetWidth / 2).toFixed(2)
      );
    };

    const updateTransformStyle = (x: string, y: string) => {
      const style = `perspective(100px) rotateX(${Number(x) / 3}deg) rotateY(${
        Number(y) / 1.5
      }deg)`;
      inner.style.transform = style;
      // circle follow cursor
    };

    //-----------------------------------------

    container.onmouseenter = onMouseEnterHandler;
    container.onmouseleave = onMouseLeaveHandler;
    container.onmousemove = onMouseMoveHandler;
  }, [index]);

  const lottieItem = useMemo(() => {
    return (
      <>
        <Lottie
          isStopped={pauseItem}
          options={{
            loop: true,
            autoplay: true,
            animationData: animationCircleArrow,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
          height={48}
          width={48}
        />
      </>
    );
  }, [pauseItem]);

  return (
    <Box
      id={`container-${index}`}
      sx={{
        transition: ".5s",
        height: "100%",
      }}
      onMouseEnter={() => setPauseItem(false)}
      onMouseLeave={() => setPauseItem(true)}
      onClick={handleClick}
    >
      <Card
        id={`inner-${index}`}
        sx={{
          padding: "1.5rem 1.5rem 0 1.5rem",
          borderRadius: "1rem",
          height: "100%",
          position: "relative",
          transition: ".5s",
          background: bg,
        }}
      >
        <Box
          sx={{
            position: "relative",
            paddingBottom: "1.5rem",
            "&:after": {
              content: '""',
              display: "block",
              width: "100%",
              height: "3px",
              background: "white",
              bottom: "0",
              left: "0",
              borderRadius: "30rem",
              position: "absolute",
            },
          }}
        >
          <Stack direction={"row"} alignItems={"center"}>
            <Typography variant={"h4"} fontWeight={700} paddingRight={'1rem'}>
              {title}
            </Typography>
            <Box
              sx={{
                marginLeft: "auto",
                transform: "rotate(-45deg)",
              }}
            >
              {lottieItem}
            </Box>
          </Stack>
        </Box>
        <CardContent
          sx={{
            padding: "0 !important",
            paddingTop: "1.5rem !important",
          }}
        >
          <Typography
            marginBottom={"1.5rem"}
            variant={"body1"}
            fontWeight={500}
          >
            {content}
          </Typography>
        </CardContent>
        <img
          style={{
            opacity: "0",
          }}
          width={"100%"}
          src={img}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "-.5rem",
            left: "0",
            padding: "0 1.5rem",
            height: "fit-content",
          }}
        >
          <img
            style={{
              borderTopLeftRadius: "1rem",
              borderTopRightRadius: "1rem",
            }}
            width={"100%"}
            src={img}
            alt=""
          />
        </Box>
      </Card>
    </Box>
  );
}
