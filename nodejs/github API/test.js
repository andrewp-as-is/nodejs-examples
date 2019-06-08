function cls(user) {
    this.name = user
    this.repos = null;
    this.load_repos = function(callback, repos, page) {
        repos = repos || [];
        page = page || 1;
        var uri = "https://api.github.com/users/" + this.name + "/repos?callback=?&per_page=100&page=" + page;
        console.log(uri);
        $.getJSON(uri, function(result) {
            if (result.data && result.data.length > 0) {
                console.log("2");
                repos = repos.concat(result.data);
                load_repos(callback, repos, page + 1);
                console.log("3");
            } else {
                console.log("4");
            }
        }); //$.getJSON
    } //this.load_repos
    this.repos = function(callback) {
        if (this.repos) {
            return this._repos
        } else {}
    } //this.repos
} //function cls
var user = new cls("cancerhermit");
user.load_repos()
user.repos