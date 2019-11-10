const port = process.env.PORT || 3000,
  bodyparser = require("body-parser"),
  cookieParser = require("cookie-parser"),
  express = require("express"),
  app = express();

app.set("view engine", "ejs");

app.use(
  bodyparser.urlencoded({
    extended: true
  })
);

/*this is a way of using, requiring and running at the same time.
It needs 3 options, the secret can be literally anything, it is used to code and decode web sessions
The saveUninitialized if set to true will mean that even if server goes down, 
when it comes back customers will still be logged into their accounts as the login status is stored on a permanent db for persistant login ux
resave when true means that if no details have changed on the login side, the details will be save again anyway - can be bad performance wise sometimes*/
app.use(
  require("express-session")({
    secret: "Mama Mia Thats a Spicy Meatball!",
    resave: false,
    saveUninitialized: false
  })
);


app.use(cookieParser());


app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/public"));
// app.use(bodyP.json());


app.set('view engine', 'ejs');


app.get("/", (req, res) => {
  res.render("main", {
    root: __dirname
  });
});



app.get("*", (req, res) => {
  res.render("error", {
    root: __dirname
  });
});
 
app.listen(port, function () {
  console.log(`You rockin now on port ${port}`);
});