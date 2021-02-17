# To run media-apps with docker

docker pull ash360/cust_facing  
docker pull ash360/nginx_server  
docker pull ash360/admin_app

# to list all the docker images in system

docker images

# to start

cd "certification project/media-nginx"
docker-compose up

# check out customer facing app

http://localhost:9900

click image slider to see detail page

"open two browsers"  
enter name & click [set nickname]  
enter messages & click chat message

click [Sports] menu

click [About Us] menu

click [Contact Us menu]

(note: the apps use database hosted on external mongodb atlas cluster)

# check out admin app

http://localhost:9900

register an admin user

Add News (FYI)  
title: The Ashwin Perspective: Deal with accusations on pitches better, reflect how we treat our own players  
description :Reflect on how they deal with accusations of preparing tailor-made pitches or how, instead of celebrating a talent like
urlToImage : "test.jpg"  
publishedAt : 24-02-2021

Click [EditNews] menu

Click [Logout] logsout

# to stop

docker-compose down

GitHub :
