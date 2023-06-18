import React from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import Image from "next/image";

function CustomDropdown({ onClose }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    onClose();
  };

  return (
    <div>
      <button onClick={handleOpen}>English</button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        keepMounted
      >
        <div className="flex p5" style={{ width: "340px" }}>
          <div className="w-full">
            <MenuItem onClick={handleClose}>
              <Image
                src="https://www.luckycrush.live/module/static/media/en.bf66285e.svg"
                width={24}
                height={24}
                className="mr-2"
              />
              Deutsch
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Image
                src="https://www.luckycrush.live/module/static/media/en.bf66285e.svg"
                width={24}
                height={24}
                className="mr-2"
              />
              Español
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Image
                src="https://www.luckycrush.live/module/static/media/en.bf66285e.svg"
                width={24}
                height={24}
                className="mr-2"
              />
              Français
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Image
                src="https://www.luckycrush.live/module/static/media/en.bf66285e.svg"
                width={24}
                height={24}
                className="mr-2"
              />
              日本語
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Image
                src="https://www.luckycrush.live/module/static/media/en.bf66285e.svg"
                width={24}
                height={24}
                className="mr-2"
              />
              Dutch
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Image
                src="https://www.luckycrush.live/module/static/media/en.bf66285e.svg"
                width={24}
                height={24}
                className="mr-2"
              />
              Português
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Image
                src="https://www.luckycrush.live/module/static/media/en.bf66285e.svg"
                width={24}
                height={24}
                className="mr-2"
              />
              Русский
            </MenuItem>
          </div>
          <div className="w-full">
            <MenuItem onClick={handleClose}>
              <Image
                src="https://www.luckycrush.live/module/static/media/en.bf66285e.svg"
                width={24}
                height={24}
                className="mr-2"
              />
              English
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Image
                src="https://www.luckycrush.live/module/static/media/en.bf66285e.svg"
                width={24}
                height={24}
                className="mr-2"
              />
              Suomi
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Image
                src="https://www.luckycrush.live/module/static/media/en.bf66285e.svg"
                width={24}
                height={24}
                className="mr-2"
              />
              Italiano
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Image
                src="https://www.luckycrush.live/module/static/media/en.bf66285e.svg"
                width={24}
                height={24}
                className="mr-2"
              />
              한국어
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Image
                src="https://www.luckycrush.live/module/static/media/en.bf66285e.svg"
                width={24}
                height={24}
                className="mr-2"
              />
              Norsk
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Image
                src="https://www.luckycrush.live/module/static/media/en.bf66285e.svg"
                width={24}
                height={24}
                className="mr-2"
              />
              Română
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Image
                src="https://www.luckycrush.live/module/static/media/en.bf66285e.svg"
                width={24}
                height={24}
                className="mr-2"
              />
              Svenska
            </MenuItem>
          </div>
        </div>
      </Menu>
    </div>
  );
}
export default CustomDropdown;
