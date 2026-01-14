import styles from "./Button.module.css";
import Link from "next/link";

type ButtonProps = {
  text: string;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

export default function Button({
  text,
  variant = "primary",
  href,
  onClick,
  type = "button",
}: ButtonProps) {
  const className = `${styles.button} ${styles[variant]}`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {text}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={className}>
      {text}
    </button>
  );
}
