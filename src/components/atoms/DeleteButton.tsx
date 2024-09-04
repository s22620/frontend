import { FC } from "react";

interface DeleteButtonProps {
  onDelete: () => void;
  isLoading: boolean;
}

export const DeleteButton: FC<DeleteButtonProps> = ({
  onDelete,
  isLoading,
}) => {
  return (
    <button
      onClick={onDelete}
      className={`px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 ${
        isLoading ? "bg-opacity-50 cursor-not-allowed" : ""
      }`}
      disabled={isLoading}
    >
      {isLoading ? "Anulowanie..." : "Anuluj"}
    </button>
  );
};
