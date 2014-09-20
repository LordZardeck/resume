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
					workExperience: 'tmpl/content/work-experience.html',
					personalSkills: 'tmpl/content/personal-skills.html',
					projects: 'tmpl/content/projects.html',
					proficiency: 'tmpl/content/proficiency.html'
				}
			}
		}
	}
};