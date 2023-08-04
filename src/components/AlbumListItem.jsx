import { Box } from "@mui/material";

const AlbumsListItem = ({ album }) => {
  return (
    <>
      <Box>{album?.title}</Box>
    </>
  );
};

export default AlbumsListItem;
