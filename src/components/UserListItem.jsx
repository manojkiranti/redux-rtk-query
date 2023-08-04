import { memo } from "react";
import PropTypes from "prop-types";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import { useDeleteUserMutation } from "../store";
import AlbumsList from "./AlbumsList";

const UserListItem = ({ user }) => {
  console.log("userlistitem");

  const [deleteUser, result] = useDeleteUserMutation();
  console.log(result);
  const handleChange = (event, expanded) => {
    console.log("event", event);
    console.log("expanded", expanded);
  };

  const handleDelete = () => {
    deleteUser(user);
  };
  return (
    <>
      <Box sx={{ display: "flex", marginBottom: "1rem", width: "100%" }}>
        <Accordion onChange={handleChange} sx={{ flexGrow: 1 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography>{user?.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <AlbumsList user={user} />
          </AccordionDetails>
        </Accordion>
        <Box sx={{ marginLeft: "10px" }}>
          <DeleteIcon
            color='error'
            sx={{ cursor: "pointer" }}
            onClick={handleDelete}
          />
        </Box>
      </Box>
    </>
  );
};
UserListItem.propTypes = {
  user: PropTypes.object,
};
export default memo(UserListItem);
