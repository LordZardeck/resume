module.exports = {
	dev: {
		src: 'tmpl/index.html',
		options: {
			beautify: false,
			relative: true,
			sections: {
				sidebar: {
					professionalSkills: 'tmpl/sidebar/professional-skills.html',
					profile: 'tmpl/sidebar/profile.html',
					contact: 'tmpl/sidebar/contact.html',
					title: 'tmpl/sidebar/title.html'
				},
				content: {
					workExperience: 'tmpl/content/work-experience/*',
					personalSkills: 'tmpl/content/personal-skills/*',
					projects: 'tmpl/content/projects/*',
					proficiency: 'tmpl/content/proficiency/*',
					jobDetails: 'tmpl/content/job-details/*'
				}
			}
		}
	}
};