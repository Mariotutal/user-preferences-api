import app from "./routes";

const port = process.env.PORT || 4000;

//Start the server
app.listen(port, () => {
  console.log(`Server is running`);
});
