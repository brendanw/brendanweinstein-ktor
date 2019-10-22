# brendanweinstein-ktor

Over the summer I was developing android in kotlin and a server in node.js. I was far more effective in my android work. Kotlin is typed but not as verbose as java; it offers the powerful flexibility of javascript with some rules. I wanted to pick a small web project to use kotlin on before committing to using it for larger projects.

This is my professional website/resume for wingsuit projects. We have one endpoint for passing on emails and some basic usage of templates. We use gradle since I am more familiar with it from android development. The freemarker java template usage is the same as django and handlebars templates with minor differences in syntax.

To run locally, first install gradle:

On mac: `brew install gradle` (visit https://brew.sh/ for homebrew installation instructions)
On windows: `choco install gradle` (visit https://chocolatey.org/install for chocolatey installation instructions)

Then run:

`./gradlew run`

You should be able to visit http://localhost:5001/ to browse the website.

To deploy to heroku:

`./gradlew assemble && git commit -a -m "Server deployment" && git push heroku master`

