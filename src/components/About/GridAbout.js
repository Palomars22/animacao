import { Container, Icon, Typography } from "@material-ui/core";

export default function GridAbout(props) {
  return (
    <Container align="left">
      <Icon>{props.icon}</Icon>
      <Typography variant="h1">{props.title}</Typography>
    </Container>
  );
}
