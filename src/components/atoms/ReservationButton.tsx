import { FC } from "react";

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export const ReservationButton: FC<ButtonProps> = ({
  onClick,
  disabled = false,
}) => (
  <button
    onClick={onClick}
    className="px-4 py-2 mt-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
    disabled={disabled}
  >
    Zarezerwuj i zapłać
  </button>
);
