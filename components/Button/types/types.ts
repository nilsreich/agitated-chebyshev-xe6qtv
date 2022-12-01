export type ButtonProps = {
  label: string;
  onClick?: () => void;
  className?: string;
  intent?: "primary" | "ghost" | null | undefined;
  size?: "small" | "medium" | null | undefined;
};
