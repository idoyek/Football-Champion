import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function PlayerCard({ name, age, number, position, photo }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={name}
        height="150"
        image={photo}
        sx={{ objectFit: "contain" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Position: {position}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Age: {age}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Number: {number ? number : "None"}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
