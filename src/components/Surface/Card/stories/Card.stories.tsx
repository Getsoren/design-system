import {
  Avatar,
  Box,
  Button,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  IconButtonProps,
  Stack,
  SvgIcon,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import { red } from "@mui/material/colors";
import type { Meta, StoryFn } from "@storybook/react-vite";
import { useState } from "react";
import Card from "./Card";

const image = "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e";

const Template: StoryFn<typeof Card> = (args) => (
  <Stack spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Card sx={{ minWidth: 275 }} {...args}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          Hello
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />a benevolent smile
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More small</Button>
      </CardActions>
    </Card>

    <Card sx={{ minWidth: 275 }} {...args}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          Hello
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />a benevolent smile
        </Typography>
      </CardContent>
      <CardActions>
        <Button>Learn More</Button>
      </CardActions>
    </Card>
  </Stack>
);

const TemplateMedia: StoryFn<typeof Card> = (args) => (
  <Stack spacing={0} alignItems="center" justifyContent="center" height="100%">
    <Card sx={{ maxWidth: 345 }} {...args}>
      <CardMedia component="img" height="140" image={image} alt="PME" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  </Stack>
);

const TemplateAction: StoryFn<typeof Card> = (args) => (
  <Stack spacing={0} alignItems="center" justifyContent="center" height="100%">
    <Card sx={{ maxWidth: 345 }} {...args}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={image} alt="PME" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Click on the card !
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Stack>
);

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ArrowIcon = () => {
  const { palette } = useTheme();

  return (
    <svg width="20" height="20" x="0" y="0" viewBox="0 0 128 128">
      <g>
        <path
          d="m64 88c-1.023 0-2.047-.391-2.828-1.172l-40-40c-1.563-1.563-1.563-4.094 0-5.656s4.094-1.563 5.656 0l37.172 37.172 37.172-37.172c1.563-1.563 4.094-1.563 5.656 0s1.563 4.094 0 5.656l-40 40c-.781.781-1.805 1.172-2.828 1.172z"
          fill={palette.text.primary}
        />
      </g>
    </svg>
  );
};

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: "auto",
  transform: expand ? "rotate(180deg)" : "rotate(0deg)",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const TemplateComplexInteraction: StoryFn<typeof Card> = (args) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box display="flex" height="100%" overflow="auto" justifyContent="center" flexWrap="wrap" alignItems="center">
      <Card sx={{ maxWidth: 345 }} {...args}>
        <CardHeader
          avatar={
            <Avatar sx={{ backgroundColor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <SvgIcon
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="MoreVertIcon"
              >
                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
              </SvgIcon>
            </IconButton>
          }
          title="Vous louez du matériel régulièrement ?"
          subheader="September 14, 2016"
        />
        <CardMedia component="img" height="194" image={image} alt="PME" />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along
            with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <SvgIcon
              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="FavoriteIcon"
            >
              <path d="m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </SvgIcon>
          </IconButton>
          <IconButton aria-label="share">
            <SvgIcon
              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="ShareIcon"
            >
              <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
            </SvgIcon>
          </IconButton>
          <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
            <ArrowIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.</Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and
              cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
              chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often
              until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the
              liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the
              rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any
              mussels that don&apos;t open.)
            </Typography>
            <Typography>Set aside off of the heat to let rest for 10 minutes, and then serve.</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Box>
  );
};
export const Basic = Template.bind({});
Basic.args = {};

export const Elevation = Template.bind({});
Elevation.args = {
  variant: "elevation",
};

export const Callout = Template.bind({});
Callout.args = {
  variant: "callout",
};

export const Media = TemplateMedia.bind({});
Media.args = {};

export const ActionArea = TemplateAction.bind({});
ActionArea.args = {};

export const ComplexInteraction = TemplateComplexInteraction.bind({});
ComplexInteraction.args = {};

export const Square = Template.bind({});
Square.args = {
  square: true,
};

export default {
  component: Card,
  title: "Components/Surface/Card",
} as Meta<typeof Card>;
