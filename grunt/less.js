module.exports = {
	app: {
        options: {
            paths: [
                'less/'
            ],
            compress: true,
            cleancss: true,
            sourceMap: true,
            // These could be chagned if you build, but move files to say, a CDN
            modifyVars: {
                "fonts": '"fonts/"',
                "images": '"img/"'
            }
        },
        files: {
            "assets/css/style.min.css": "less/style.less"
        }
    }
};