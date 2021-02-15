# StarchJar
StarchJar is a collection of Front-End Tutorials/Side projects I'm doing :)
### Projects:
1. FlaskTaskManager - Tutorial Task Master from: https://www.youtube.com/watch?v=Z1RJmh_OqeA
2. first-react-app - GoldenLayout + Highcharts Finance Tutorial App
## Current Status:
Split projects into folders. 
Goal is to understand how react & html & css work together, in order to create things. 


### Dan's Notes:
You can just put code in any old .js file next to index.html, or in a folder that's next to index.html. Then include it on the page with ```<script src="folder/script.js"></script>```

There's various reasons to put that tag in different places on the page, but for simplicity, you probably want to put any libraries you're using (like Highcharts and Golden Layout) somewhere in the ```<head>``` section, and any code you're writing gets imported right before your closing ```</body>``` tag

There's a couple small asterisks to both of these statements, but for the most part, putting a script in the ```<head>``` of the page will make the browser load it ASAP, and putting it at the end of the body will make the browser wait to load the script until the page is ready, which means you don't need to worry about hooking any page load events or anything.