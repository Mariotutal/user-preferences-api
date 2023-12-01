import app from "./routes";

const port = process.env.PORT || 5000;

//Start the server
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
