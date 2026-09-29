import { Alert, Button, IconButton, SnackbarOrigin, Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import { SyntheticEvent, useState } from "react";
import useSnackbar from "@/hooks/useSnackbar/useSnackbar";
import Snackbar from "./Snackbar";

export interface State extends SnackbarOrigin {
  open: boolean;
}

const Template: StoryFn<typeof Snackbar> = (args) => {
  const [open, setOpen] = useState(true);

  const handleClose = (_: SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <>
      <Button color="info" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
        &times;
      </IconButton>
    </>
  );

  return (
    <Stack spacing={2} alignItems="center" justifyContent="center" sx={{ height: "100%" }}>
      <Snackbar open={open} onClose={handleClose} message="Note archived" action={action} {...args} />
    </Stack>
  );
};

const CustomTemplate: StoryFn<typeof Snackbar> = (args) => {
  const [open, setOpen] = useState(true);

  const handleClose = (_?: SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={2} alignItems="center" justifyContent="center" sx={{ height: "100%" }}>
      <Snackbar open={open} onClose={handleClose} {...args}>
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
    </Stack>
  );
};

const PositionTemplate: StoryFn<typeof Snackbar> = () => {
  const [state, setState] = useState<State>({
    horizontal: "center",
    open: true,
    vertical: "top",
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState: SnackbarOrigin) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" sx={{ height: "100%" }}>
      <Button
        variant="outlined"
        onClick={handleClick({
          horizontal: "center",
          vertical: "top",
        })}
      >
        Top-Center
      </Button>
      <Button
        variant="outlined"
        onClick={handleClick({
          horizontal: "right",
          vertical: "top",
        })}
      >
        Top-Right
      </Button>
      <Button
        variant="outlined"
        onClick={handleClick({
          horizontal: "right",
          vertical: "bottom",
        })}
      >
        Bottom-Right
      </Button>
      <Button
        variant="outlined"
        onClick={handleClick({
          horizontal: "center",
          vertical: "bottom",
        })}
      >
        Bottom-Center
      </Button>
      <Button
        variant="outlined"
        onClick={handleClick({
          horizontal: "left",
          vertical: "bottom",
        })}
      >
        Bottom-Left
      </Button>
      <Button
        variant="outlined"
        onClick={handleClick({
          horizontal: "left",
          vertical: "top",
        })}
      >
        Top-Left
      </Button>
      <Snackbar
        anchorOrigin={{ horizontal, vertical }}
        open={open}
        onClose={handleClose}
        message="I love snacks"
        key={vertical + horizontal}
      />
    </Stack>
  );
};

const SnackbarHookTemplate: StoryFn<typeof Snackbar> = () => {
  const { openSnackbar } = useSnackbar();

  const handleOpen = () => {
    openSnackbar({ message: "This is a success message!", severity: "success" });
  };

  return (
    <Stack spacing={2} alignItems="center" justifyContent="center" sx={{ height: "100%" }}>
      <Button onClick={handleOpen} variant="outlined">
        Open snackbar
      </Button>
    </Stack>
  );
};

export const Basic = Template.bind({});
Basic.args = {};

export const CustomWithAlert = CustomTemplate.bind({});
CustomWithAlert.args = {};

export const Position = PositionTemplate.bind({});
Position.args = {};

export const SnackbarHook = SnackbarHookTemplate.bind({});
SnackbarHook.args = {};

export default {
  component: Snackbar,
  title: "Components/Feedback/Snackbar",
} as Meta<typeof Snackbar>;
