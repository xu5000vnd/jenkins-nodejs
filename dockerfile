FROM node:12
# mkdir /var/www/app
# RUN mkdir /var/www/app
# cd /var/www/app
WORKDIR /var/www/app
COPY ./package.json ./
RUN npm install
COPY ./ ./
EXPOSE 3000
CMD ["node", "index.js"]