// File to generate template.json

const execSync = require('child_process').execSync
const fs = require('fs')

// Packages to be added to template.json
const packages = [
	'@material-ui/core',
	'@material-ui/icons',
	'@testing-library/jest-dom',
	'@testing-library/react',
	'@testing-library/user-event',
	'react',
	'react-dom',
	'react-redux',
	'react-router-dom',
	'react-scripts',
	'redux',
	'redux-devtools-extension',
	'redux-thunk',
	'typeface-roboto',
]
const templateFile = 'template.json'
const writeToFile = (string, flag = 'a') => {
	fs.writeFileSync(templateFile, string, { flag })
}

const index = packages.length - 1

writeToFile('{\n\t"package": {\n\t\t"dependencies": {\n', 'w')

for (let t in packages.slice(0, index))
	writeToFile(
		execSync(
			`echo '\t\t\t"'${packages[t]}'": "^'$(npm view ${packages[t]} version)'",'`
		).toString()
	)

writeToFile(
	execSync(
		`echo '\t\t\t"'${packages[index]}'": "^'$(npm view ${packages[index]} version)'"'`
	).toString()
)

writeToFile('\t\t}\n\t}\n}\n')
