1. Ensure you have latest Node installed. 
2. Run "npm insall" on your local project. 
3. Run "ng serve".

To build into an nginix docker container and run locally:
1. Run "npm install"
2. Run "ng build"
3. Run "docker build -t demoui ."
4. Run "docker run -p 80:80 --name demoui demoui"