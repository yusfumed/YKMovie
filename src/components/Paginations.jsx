import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowRight from "../icons/ArrowRight";
import ArrowLeft from "../icons/ArrowLeft";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Stack from "@mui/material/Stack";
import React from "react";

function Paginations(props) {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      mt={8}
    >
      <Pagination
        page={props.page}
        onChange={props.handlePageChange}
        count={props.total_pages}
        color="primary"
        size="large"
        showFirstButton
        showLastButton
        renderItem={(item) => (
          <PaginationItem
            slots={{
              first: KeyboardDoubleArrowLeftIcon,
              previous: ArrowLeft,
              next: ArrowRight,
              last: KeyboardDoubleArrowRightIcon,
            }}
            {...item}
          />
        )}
      />
    </Stack>
  );
}

export default Paginations;
