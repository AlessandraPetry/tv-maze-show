"use client";

import { useRouter } from "next/navigation";

type GoBackButtonProps = {
  withText?: boolean;
};

const GoBackButton = ({ withText = false }: GoBackButtonProps) => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back(); // Go to the previous page of the navigation
  };

  return (
    <button
      onClick={handleGoBack}
      className="p-4 bg-gray-200 rounded-full text-gray-700 hover:bg-gray-300 flex flex-row"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
      {withText && <p className="font-bold ml-3">Go back</p>}
    </button>
  );
};

export default GoBackButton;
