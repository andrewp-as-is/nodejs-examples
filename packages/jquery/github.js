#!/usr/bin/env node

var $ = require('jquery');

function cls(user) {
    var self = this
    this.name = user
    this.page = 1
    this.callback = null
    this.repos = [];
    this.repos_callback = function(result) {
        if (result.data && result.data.length > 0) {
            self.repos = self.repos.concat(result.data);
            self.page++;
            $.getJSON(
            self.repos_url(self.page),
            self.repos_callback);
        } else { //no more
            $.each(self.repos, function(i, repo) {
                repo.pushed_at = new Date(repo.pushed_at);
            });
            if (self.callback !== null) {
                self.callback();
            }
        }
    }
    this.repos_url = function(page) {
        return "https://api.github.com/users/" + this.name + "/repos?callback=?&per_page=50&page=" + page;
    }
    this.repos_load = function(callback) {
        this.page = 1
        this.callback = callback
        $.getJSON(
        self.repos_url(self.page),
        self.repos_callback);
    } //this.load_repos
    this.repo = function(name) {
        var r = $.grep(self.repos, function(repo, n) {
            return repo.name == name
        });
        if (r.length > 0) {
            return r[0]
        }
    }
} //function cls
var user = new cls("cancerhermit");
user.repos_load(function() {
    console.log(user.repo("pypixmlrpc")
        .description);
})