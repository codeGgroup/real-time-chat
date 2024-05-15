## Getting started

- Clone the repository
  ```shell
  git clone https://github.com/codeGgroup/real-time-chat.git
  ```
    - Identify your feature and checkout to the branch that concerns it. E.g if you're working on the `View contact info`
      issue. You can do,
      ```shell
      git branch --all
      ```
      to see all the branches, then choose which one concerns you feature and checkout to it like this:
      ```shell
      git checkout 12-view-contact-info
      ```
- Create the files your need and start working.
- When you're done, do a commit and push
  ```shell
  git add <filename>
  ```
  or in case of multiple files
  ```shell
  git add <file1> <file2> <file3>
  ```
  then commit:
  ```shell
  git commit -m "enter the commit message to describe your work"
  ```
  If you can sign your commits, that is recommended. If not, please don't worry about it.
  you can look at my commits to take an example.
  then push
  ```shell
  git push
  ```
  If your are pushing for the first time to that branch, do:
  ```shell
  git push -u origin <branch-name>
  ```
## Setup the project
- Install MongoDB and create a database using Mongo CLI (UBUNTU)
  ```shell
  sudo apt-get install gnupg curl
  ```
  ```shell
  curl -fsSL https://www.mongodb.org/static/pgp/server-7.0.asc | \
     sudo gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg \
     --dearmor
  ```
  ```shell
  sudo touch /etc/apt/sources.list.d/mongodb-org-7.0.list file for Ubuntu 22.04
  ```
  ```shell
  echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
  ```
  ```shell
  sudo apt-get install -y mongodb-org
  ```
  ```less
  https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/
  ```
- Create DB
  ```less
  mongosh
  ```
  ```less
  use chat-app
  ```
- Run the backend
  ```shell
  cd server
  ```
  ```shell
  npm install
  ```
  ```shell
  node server.js
  ```
- Check if the database is connected
  ```shell
  curl http://localhost:3002/health
  ```
  if the output is `{ "message": "DB not connected" }`, then the db is connected.
- Install frontend dependencies
  ```less
  cd chat-app-frontend
  ```
  ```less
  npm install axios
  ```
  ```less
   npm install react-router-dom
  ```
  ```less
  npm start
  ```
  