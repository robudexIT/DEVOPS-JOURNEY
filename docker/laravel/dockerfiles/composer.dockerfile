FROM composer

WORKDIR /var/www/html

ENTRYPOINT ["composer", "--ignore-platform-reqs" , "--no-scripts"]