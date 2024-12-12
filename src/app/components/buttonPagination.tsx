import { Box, Button } from "@mui/material";
import { useStore } from "../../store/StorePageNumber"

export default function ButtonPagination() {
  const pageNumber = useStore((state) => state.pageNumber);
  const setPageNumber = useStore((state) => state.setPageNumber);


  return (
    <Box
      sx={{
        margin: "40px",
        display: "flex",
        justifyContent: "center",
        columnGap: "20px"

      }}>

      <Button
        size="small"
        variant="contained"
        onClick={() => setPageNumber(pageNumber - 1)}
        disabled={pageNumber === 1}
      >
        previous
      </Button>

      <Button
        size="small"
        variant="contained"
        onClick={() => setPageNumber(pageNumber + 1)}
        disabled={pageNumber === 3}
      >
        Next
      </Button>

    </Box>
  );
}


