// import { useMemo } from "react";

type UsePaginationProps = {
  totalCount: number;
  pageSize: number;
  siblingCount: number;
  currentPage: number;
};

// const range = (start: number, end: number) => {
//   let length = end - start + 1;
//   /*
//         Create an array of certain length and set the elements within it from
//       start value to end value.
//     */
//   return Array.from({ length }, (_, idx) => idx + start);
// };

export const usePagination = ({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage,
}: UsePaginationProps) => {
  //   const paginationRange = useMemo(() => {

  //   }, [totalCount, pageSize, siblingCount, currentPage]);
//   return paginationRange;
};
