// TODO: Edit the URL to get only 5 issues of Twitter's Chill repo
var requestUrl = "https://api.github.com/repos/twitter/chill/issues";

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log("Github Repo Issues \n----------");
    console.log(data);
    for (var i = 0; i < 5; i++) {
      console.log("🚀 ~ file: script.js ~ line 14 ~ data[i].url", data[i].url);
      console.log(data[i].user.login);
      console.log(
        "🚀 ~ file: script.js ~ line 14 ~ data[i].user.login",
        data[i].user.login
      );
    }

    // TODO: Loop through the response
    // TODO: Console log each issue's URL and each user's login
  });
