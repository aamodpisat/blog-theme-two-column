/**
 * Created by Aamod Pisat on 12-08-2016.
 */

var Hooks = {};
Hooks.serverExtends = function(app) {
    app.use('/blog', function(req, res, next){
        Blog.getRecentPosts()
            .spread(function success(entries){
                req.getViewContext().set('recentPosts', entries);
                next();
            });
    }, function(req, res, next){
        Blog.getAuthors()
            .spread(function success(entries){
                req.getViewContext().set('authors', entries);
                next();
            });
    }, function(req, res, next){
        Blog.getCategories()
            .spread(function success(entries){
                req.getViewContext().set('categories', entries);
                next();
            });
    });
};
Hooks.templateExtends = function(engine) {
    var env = engine.getEnvironment();
    env.addFilter('shorten', function(str, count) {
        return str.slice(0, count || 5);
    });
};
module.exports =  Hooks;