// Build base path to views
var path = require("path");  
var viewsPath = path.join(__dirname, '../views');

module.exports = function(app, express) {
    app.configure(function() {
        console.log('Base path for views: ' + viewsPath   );
        app.use(express.logger());
        app.set('views', viewsPath  );
        app.set('view engine', 'ejs');
    });
};
