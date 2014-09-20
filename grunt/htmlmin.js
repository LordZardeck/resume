module.exports = { // Task
	dist: { // Target
		options: { // Target options
			removeComments: true,
			collapseWhitespace: true
		},
		files: { // Dictionary of files
			'index.html': 'index.html', // 'destination': 'source'
		}
	}
}