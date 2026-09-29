import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle, PopperProps, Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import { ElementRef, MouseEvent, useRef, useState } from "react";
import DialogPopper from "@/components/Feedback/Dialog/DialogPopper/DialogPopper";
import Dialog from "../DialogPopper";

const BasicTemplate: StoryFn<typeof Dialog> = ({ ...args }, { parameters }) => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<Element>();
  const anchorRef = useRef<ElementRef<"button">>(null);

  const handleClickOpen = (e: MouseEvent) => {
    setOpen(true);
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack spacing={2} justifyContent="center" alignItems="center" sx={{ height: "100%" }}>
      <Button variant="outlined" onClick={handleClickOpen} ref={anchorRef}>
        Open popper dialog
      </Button>
      <DialogPopper {...args} open={open} onClose={handleClose} anchorEl={anchorEl}>
        <DialogTitle id="alert-dialog-title">Lorem ipsum ?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Disagree
          </Button>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Agree
          </Button>
        </DialogActions>
      </DialogPopper>
    </Stack>
  );
};

const PlacementTemplate: StoryFn<typeof Dialog> = ({ ...args }, { parameters }) => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<Element>();
  const [placement, setPlacement] = useState<PopperProps["placement"]>();
  const anchorRef = useRef<ElementRef<"button">>(null);

  const handleClickOpen = (e: MouseEvent, newPlacement?: PopperProps["placement"]) => {
    setPlacement(newPlacement);
    setOpen(true);
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack spacing={2} justifyContent="center" alignItems="center" sx={{ height: "100%" }}>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" onClick={(e) => handleClickOpen(e, "top-start")} ref={anchorRef}>
          Top start
        </Button>
        <Button variant="outlined" onClick={(e) => handleClickOpen(e, "top")} ref={anchorRef}>
          Top
        </Button>
        <Button variant="outlined" onClick={(e) => handleClickOpen(e, "top-end")} ref={anchorRef}>
          Top start
        </Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" onClick={(e) => handleClickOpen(e, "left")} ref={anchorRef}>
          Left
        </Button>
        <Button variant="outlined" onClick={handleClickOpen} ref={anchorRef}>
          Default
        </Button>
        <Button variant="outlined" onClick={(e) => handleClickOpen(e, "right")} ref={anchorRef}>
          Right
        </Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" onClick={(e) => handleClickOpen(e, "bottom-start")} ref={anchorRef}>
          Bottom start
        </Button>
        <Button variant="outlined" onClick={(e) => handleClickOpen(e, "bottom")} ref={anchorRef}>
          Bottom
        </Button>
        <Button variant="outlined" onClick={(e) => handleClickOpen(e, "bottom-end")} ref={anchorRef}>
          Bottom end
        </Button>
      </Stack>
      <DialogPopper {...args} open={open} onClose={handleClose} anchorEl={anchorEl} placement={placement}>
        <DialogTitle id="alert-dialog-title">Lorem ipsum ?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Disagree
          </Button>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Agree
          </Button>
        </DialogActions>
      </DialogPopper>
    </Stack>
  );
};

export const Basic = BasicTemplate.bind({});
Basic.args = {};

export const Placement = PlacementTemplate.bind({});
Placement.args = {
  placement: "bottom-end",
};

export default {
  component: Dialog,
  title: "Components/Feedback/DialogPopper",
} as Meta<typeof Dialog>;
