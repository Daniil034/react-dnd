import "./style.scss";

interface Props {
  children: string;
  span?: "1" | "2";
}

export function InputButton({ children, span = "1" }: Props) {
  return (
    <div
      className={
        span === "1"
          ? "input-button"
          : "input-button input-button--span-2"
      }
    >
      {children}
    </div>
  );
}
