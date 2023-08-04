import Box from "@mui/material/Box";
import { useFetchAlbumsQuery } from "../store";
import Skeleton from "@mui/material/Skeleton";
import Alert from "@mui/material/Alert";
import AlbumsListItem from "./AlbumListItem";

const AlbumsList = ({ user }) => {
  const { data, error, isFetching } = useFetchAlbumsQuery(user);

  let content;
  if (isFetching) {
    content = <Skeleton variant='rectangular' width='100%' height={200} />;
  } else if (error) {
    content = <Alert severity='error'>Error Loading Users!</Alert>;
  } else {
    content = data.map((album) => (
      <AlbumsListItem album={album} key={album.id} />
    ));
  }
  return (
    <>
      <Box>
        <Box>{content}</Box>
      </Box>
    </>
  );
};

export default AlbumsList;
