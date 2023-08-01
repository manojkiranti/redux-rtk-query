import { useState, useCallback } from "react";
import { useFetchUsersQuery } from "../store";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import Alert from "@mui/material/Alert";
import UserListItem from "./UserListItem";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import AddUser from "./AddUser";

const UserList = () => {
  console.log("UserList");
  const { data, error, isLoading } = useFetchUsersQuery();
  const [open, setOpen] = useState(false);

  const handleAddUser = () => {
    setOpen(true);
  };

  let content;
  if (isLoading) {
    content = <Skeleton variant='rectangular' width='100%' height={200} />;
  } else if (error) {
    content = <Alert severity='error'>Error Loading Users!</Alert>;
  } else {
    content = data.map((user) => <UserListItem user={user} key={user.id} />);
  }
  return (
    <>
      <Grid container spacing={2} mb={4}>
        <Grid item xs={8}>
          <Typography variant='h5'>Users</Typography>
        </Grid>
        <Grid item xs={4} sx={{ textAlign: "right" }}>
          <Button variant='contained' onClick={handleAddUser}>
            Add User
          </Button>
        </Grid>
      </Grid>

      {content}
      <AddUser open={open} handleClose={() => setOpen(false)} />
    </>
  );
};

export default UserList;
