FROM mongo

COPY *.json /

CMD mongoimport --host mongo_db --db mydatabase --collection users --type json --file /users.json --jsonArray && \
mongoimport --host mongo_db --db mydatabase --collection posts --type json --file /posts.json --jsonArray