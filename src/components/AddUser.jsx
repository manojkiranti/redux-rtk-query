import { memo, useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useAddUserMutation } from "../store";
const AddUser = ({ open, handleClose }) => {
  console.log("add user");
  const [name, setName] = useState("");
  const [addNewUser, results] = useAddUserMutation();

  const handleChange = useCallback(
    (e) => {
      setName(e.target.value);
    },
    [name]
  );

  useEffect(() => {
    if (results.isSuccess) {
      setName("");
      handleClose();
    }
  }, [results]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewUser({ name });
  };
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add User</DialogTitle>
        <DialogContent>
          <Box
            component='form'
            noValidate
            autoComplete='off'
            sx={{ padding: "1rem 0" }}
            onSubmit={handleSubmit}
          >
            <Box mb={2}>
              <TextField
                required
                id='userName'
                label='name'
                variant='outlined'
                value={name}
                onChange={handleChange}
              />
            </Box>
            <Button
              disabled={results.isLoading}
              type='submit'
              variant='contained'
            >
              Submit
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

AddUser.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
export default memo(AddUser);
