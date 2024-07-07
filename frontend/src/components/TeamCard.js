import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function TeamCard({ name, founded, logo, stadium }) {
    const handleLearnMoreClick = () => {
        alert("More info");
    }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={name}
        height="150"
        image={logo}
        sx={{ objectFit: "contain" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Founded: {founded}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          Stadium: {stadium}
        </Typography> */}
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button> */}
        <Button size="small" onClick={handleLearnMoreClick}>Learn More</Button>
      </CardActions>
    </Card>
  );
}
