export type IconType = {
  classes?: string;
};

export const SearchIcon = ({ classes }: IconType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`${classes}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    height="20"
    width="20"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

export const ArrowBackIcon = ({ classes }: IconType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`${classes} h-4 w-4`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    height="20"
    width="20"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 19l-7-7m0 0l7-7m-7 7h18"
    />
  </svg>
);
export const CaretRightIcon = ({ classes }: IconType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`${classes} h-4 w-4`}
    viewBox="0 0 20 20"
    fill="currentColor"
    height="30"
    width="30"
  >
    <path
      fillRule="evenodd"
      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
      clipRule="evenodd"
    />
  </svg>
);
export const CaretLeftIcon = ({ classes }: IconType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`${classes} h-4 w-4`}
    viewBox="0 0 20 20"
    fill="currentColor"
    height="30"
    width="30"
  >
    <path
      fillRule="evenodd"
      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);
