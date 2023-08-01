import "./App.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import UserList from "./components/UserList";

function App() {
  return (
    <>
      <Box sx={{ padding: "1rem 0" }}>
        <Container maxWidth='sm'>
          <UserList />
        </Container>
      </Box>
    </>
  );
}

export default App;
