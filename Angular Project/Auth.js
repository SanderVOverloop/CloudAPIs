var ex = require('express');
const request = require('request')
const cookie = require('cookie-parser')
// const bp = require('body-parser')

var app = ex();

const clientID = '80146596396-nah6h21gi8l5kj4g3ip1d9tmvcfbl4pt.apps.googleusercontent.com'
const secret = 'hbdX3ioEb4zBQai0oKXbLHdC'
const redirectUrl = 'http%3A%2F%2Flocalhost%3A8002%2Fgoogle-callback'

//profiel pagina. 
//Er wordt eerst de naam en foto in geplaatst vooraleer deze wordt teruggestuurd naar de browser
const profile = `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
    <script src="main.js"></script>
</head>
<body>
    <br/>
    <br/>
    Hallo {username}, 
    <br/>
    <img src="{photo}" style="max-height:200px;" alt="">
</body>
</html>`

app.use(cookie());

//get root of the website
app.get('/', (req, res, next) => {
    var cookie = req.cookies.auth;
    //if no cookie, then redirect to Login page
    if (!cookie) {
        res.redirect("login.html")
    }
    else
        return next();
})

//show profile page with Google info
app.get('/profile', (req, res, next) => {
    var cookie = req.cookies.auth;
    if (!cookie)
        res.redirect("login.html");
    else {
        request.get("https://www.googleapis.com/userinfo/v2/me",
            {
                'auth': {
                    'bearer': cookie
                }
            }
            , (error, resp, body) => {
                var info = JSON.parse(body);
                //send profile page after setting name and photo
                res.write(profile.replace("{username}", info.name).replace("{photo}", info.picture));
                res.end();
            })
    }
})

//user wants to login via google OAuth
app.get('/googlelogin', (req, res, next) => {
    res.redirect('https://accounts.google.com/o/oauth2/v2/auth' +
    '?client_id=' + clientID + 
    '&redirect_uri=' + redirectUrl + 
    '&scope=profile http://mail.google.com' + 
    '&response_type=code')
})

//callback from google OAuth sign-in
app.get("/google-callback", (req, res, next) => {
    //google sends us an Authorization code
    let code = req.query["code"]
    //with that code we can now request the authorization token from google
    let url = 'https://www.googleapis.com/oauth2/v4/token' +
        '?code=' + code +
        '&client_id=' + clientID + 
        '&client_secret=' + secret + 
        '&redirect_uri=' + redirectUrl + 
        '&grant_type=authorization_code'
        //must be a POST !
        request.post(url, (error, resp, body) => {
        if (!error) {
            //store the token in a cookie
            accesstoken = JSON.parse(body).access_token;
            res.cookie('auth', accesstoken, { maxAge: 60000 });
            res.redirect("http://localhost:8002/", )
        }
        else
            res.writable("An error occured with googleapis")
    })
})

//user wants to logout
app.get('/logout', (req, res) => {
    res.clearCookie('auth');
    res.redirect("/");
})

app.use(ex.static("views"));
app.use(ex.static("public"));

app.listen(8002, () => {
    console.log("server is running")
});
