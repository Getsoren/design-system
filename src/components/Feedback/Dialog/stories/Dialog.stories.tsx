import {
  AppBar,
  Avatar,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Slide,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import type { TransitionProps } from "@mui/material/transitions";
import type { Meta, StoryFn } from "@storybook/react-vite";
import { forwardRef, ReactElement, Ref, useState } from "react";
import DialogCloseIcon from "@/components/Feedback/Dialog/DialogCloseIcon";
import DialogForm from "@/components/Feedback/Dialog/DialogForm/DialogForm";
import Dialog from "./Dialog";

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

const VIEWPORTS = {
  mobile: {
    name: "Mobile",
    styles: {
      height: "600px",
      width: "480px",
    },
  },
};

const emails = ["username@gmail.com", "user02@gmail.com"];

// eslint-disable-next-line react/display-name
const TransitionSample = forwardRef(
  (
    props: TransitionProps & {
      children: ReactElement<any, any>;
    },
    ref: Ref<unknown>,
  ) => (
    <Slide direction="up" ref={ref} {...props}>
      {props.children}
    </Slide>
  ),
);

const SimpleDialog = (props: SimpleDialogProps) => {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Set backup account</DialogTitle>
      <List sx={{ pt: 0 }}>
        {emails.map((email) => (
          <ListItemButton onClick={() => handleListItemClick(email)} key={email}>
            <ListItemAvatar>
              <Avatar sx={{ backgroundColor: blue[100], color: blue[600] }} />
            </ListItemAvatar>
            <ListItemText primary={email} />
          </ListItemButton>
        ))}
        <ListItemButton autoFocus onClick={() => handleListItemClick("addAccount")}>
          <ListItemAvatar>
            <Avatar>+</Avatar>
          </ListItemAvatar>
          <ListItemText primary="Add account" />
        </ListItemButton>
      </List>
    </Dialog>
  );
};

// eslint-disable-next-line react/prop-types
const BasicTemplate: StoryFn<typeof Dialog> = ({ TransitionComponent, ...args }, { parameters }) => {
  const [open, setOpen] = useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack spacing={2} justifyContent="center" alignItems="center" sx={{ height: "100%" }}>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        {...args}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        TransitionComponent={TransitionComponent || undefined}
      >
        <DialogTitle id="alert-dialog-title">Use Google location service?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Disagree
          </Button>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
};

const WithListTemplate: StoryFn<typeof Dialog> = () => {
  const [open, setOpen] = useState(true);
  const [selectedValue, setSelectedValue] = useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <Stack spacing={2} justifyContent="center" alignItems="center" sx={{ height: "100%" }}>
      <Typography variant="subtitle1" component="div">
        Selected: {selectedValue}
      </Typography>
      <br />
      <Button variant="outlined" onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
    </Stack>
  );
};

const FullScreenTemplate: StoryFn<typeof Dialog> = (args) => {
  const [open, setOpen] = useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack spacing={2} justifyContent="center" alignItems="center" sx={{ height: "100%" }}>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open full-screen dialog
      </Button>
      <Dialog {...args} open={open} onClose={handleClose} TransitionComponent={TransitionSample}>
        <AppBar sx={{ position: "fixed" }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              X
            </IconButton>
            <Typography sx={{ flex: 1, ml: 2 }} variant="h6" component="div">
              Sound
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItemButton>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItemButton>
          <Divider />
          <ListItem>
            <ListItemText primary="Default notification ringtone" secondary="Tethys" />
          </ListItem>
        </List>
      </Dialog>
    </Stack>
  );
};

const WithCloseIconTemplate: StoryFn<typeof Dialog> = ({ ...args }, { parameters }) => {
  const [open, setOpen] = useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack spacing={2} justifyContent="center" alignItems="center" sx={{ height: "100%" }}>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog {...args} open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogCloseIcon onClick={handleClose} />
        <DialogTitle id="alert-dialog-title">Use Google location service?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Disagree
          </Button>
          <Button onClick={handleClose} variant={parameters?.variantButton} size={parameters?.sizeButton}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
};

export const Basic = BasicTemplate.bind({});
Basic.args = {};

export const BasicMobile = BasicTemplate.bind({});
BasicMobile.args = {};
BasicMobile.parameters = {
  viewport: {
    defaultViewport: "mobile",
    viewports: VIEWPORTS,
  },
};

export const BasicWithTransition = BasicTemplate.bind({});
BasicWithTransition.args = {
  TransitionComponent: TransitionSample,
};

export const DialogActionsOutlined = BasicTemplate.bind({});
DialogActionsOutlined.parameters = {
  variantButton: "outlined",
};

export const DialogActionsContained = BasicTemplate.bind({});
DialogActionsContained.parameters = {
  variantButton: "contained",
};

export const WithList = WithListTemplate.bind({});
WithList.args = {};

export const FullScreen = FullScreenTemplate.bind({});
FullScreen.args = {
  fullScreen: true,
};

export const SmallActionsButton = BasicTemplate.bind({});
SmallActionsButton.parameters = {
  sizeButton: "small",
};

export const WithDialogCloseIcon = WithCloseIconTemplate.bind({});
WithDialogCloseIcon.args = {};

const StickyActionsTemplate: StoryFn<typeof DialogActions> = (args) => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        Open dialog
      </Button>
      <Dialog fullWidth maxWidth="sm" open={open} onClose={() => setOpen(false)}>
        <DialogCloseIcon onClick={() => setOpen(false)} />
        <DialogTitle>Long form</DialogTitle>
        <DialogContent>
          {Array.from({ length: 12 }, (_, index) => (
            <DialogContentText key={index} paragraph>
              Scrollable content block {index + 1} — the actions bar below sticks to the bottom of the dialog while this content scrolls
              underneath it.
            </DialogContentText>
          ))}
        </DialogContent>
        <DialogActions {...args}>
          <Button variant="outlined" color="inherit" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="contained" onClick={() => setOpen(false)}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

const FormDialogTemplate: StoryFn<typeof Dialog> = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        Open form dialog
      </Button>
      <Dialog fullWidth maxWidth="sm" open={open} onClose={() => setOpen(false)}>
        <DialogCloseIcon onClick={() => setOpen(false)} />
        {/* DialogForm restores the Paper's flex column a plain <form> breaks: the content scrolls,
            the title and the actions stay in place. */}
        <DialogForm
          onSubmit={(event) => {
            event.preventDefault();
            setOpen(false);
          }}
        >
          <DialogTitle>Long form</DialogTitle>
          <DialogContent>
            <Stack spacing={3} paddingTop={1}>
              {Array.from({ length: 10 }, (_, index) => (
                <TextField key={index} fullWidth label={`Field ${index + 1}`} />
              ))}
            </Stack>
          </DialogContent>
          <DialogActions variant="sticky">
            <Button variant="outlined" color="inherit" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="contained" type="submit">
              Save
            </Button>
          </DialogActions>
        </DialogForm>
      </Dialog>
    </>
  );
};

export const WithFormWrapper = FormDialogTemplate.bind({});

export const StickyActions = StickyActionsTemplate.bind({});
StickyActions.args = {
  variant: "sticky",
};

export const StickyFlatActions = StickyActionsTemplate.bind({});
StickyFlatActions.args = {
  variant: "sticky-flat",
};

export const BackgroundSecondary = BasicTemplate.bind({});
BackgroundSecondary.args = {
  backgroundColor: "secondary",
};

export default {
  component: Dialog,
  title: "Components/Feedback/Dialog",
} as Meta<typeof Dialog>;
