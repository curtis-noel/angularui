FROM nginx:1.14.0-alpine
## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*
## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY /dist/Demo2 /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
