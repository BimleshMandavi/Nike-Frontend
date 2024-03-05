import * as React from "react";
import Box from "@mui/joy/Box";
import Drawer from "@mui/joy/Drawer";
import ButtonGroup from "@mui/joy/ButtonGroup";
import Divider from "@mui/joy/Divider";
import SearchIcon from "@mui/icons-material/Search";
import SearchBox from "./SearchBox";
export default function DrawerAnchor() {
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const handleCToogle = () => {
    setState(!state);
  };

  const list = (anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Divider />
    </Box>
  );

  React.useState(() => {}, [setState]);

  return (
    <React.Fragment>
      <ButtonGroup variant="outlined">
        {["top"].map((anchor) => (
          <SearchIcon
            key={anchor}
            onClick={toggleDrawer(anchor, true)}
            style={{ cursor: "pointer" }}
          />
        ))}
      </ButtonGroup>
      {["top"].map((anchor) => (
        <Drawer
          className="h-[35px]"
          key={anchor}
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          {list(anchor)}
          <div className="flex justify-between px-6 pt-7">
            <SearchBox
              className="absolute right-8"
              handleCToogle={handleCToogle}
            />
            <button
              style={{
                width: "20%",
                height: "48px",
                borderRadius: "30px",
                cursor: "pointer",
              }}
              onClick={handleCToogle}
            >
              Cencel
            </button>
          </div>
        </Drawer>
      ))}
    </React.Fragment>
  );
}
