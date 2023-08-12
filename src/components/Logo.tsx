import { useAppSelector } from "../store/hooks";

export default function Logo({size = 96}) {
  const { themeMode } = useAppSelector((state) => state.ui);

  return (
    <img
      src={`/logo-${themeMode === "light" ? "dark" : "light"}.svg`}
      style={{
        transition: "0.1s",
      }}
      alt=""
      width={size}
    />
  );
}
