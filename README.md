#Guidebook Frontend Code Challenge

###The Setup
1. Clone the project into a directory `git clone https://github.com/betodt/guidebook-challenge.git`
2. Install the dependencies using `npm install`
3. Compile the code using `browserify -t babelify app.js -o bundle.js`
4. Open the `index.html` in a browser and search away!

In my implementation, I started out by modularizing the application into smaller pieces, such as the search box and search results drop down. I used some parent-child relationships when desigining the different components. The result dropdown is rendered in the input box component and the input box is rendered in the app div. This allowed me to focus on displaying a list of results in the drop down component and on actually performing the search in the input box component.
