import {
  AspectRatio,
  Button,
  Card,
  CardContent,
  IconButton,
  Typography,
} from "@mui/joy";
import BookMark from "./bookMark/bookMark";

export default function MuiCard({ title, img, date, price }) {
  return (
    <Card>
      <div>
        <Typography level="title-lg">{title}</Typography>
        <Typography level="body-sm">{date}</Typography>
        <IconButton
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ position: "absolute", top: "0.875rem", right: "0.5rem" }}
        >
          <BookMark />
        </IconButton>
      </div>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img src={img} loading="lazy" alt="" />
      </AspectRatio>
      <CardContent orientation="horizontal">
        <div>
          <Typography level="body-xs">Total price:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            $ {price}
          </Typography>
        </div>
        <Button
          variant="solid"
          size="md"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
        >
          Explore
        </Button>
      </CardContent>
    </Card>
  );
}
