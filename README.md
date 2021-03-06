# Social Network API

![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

## Description

This API uses [MongoDB](https://www.mongodb.com/) and [mongoose](https://mongoosejs.com/) to maintain a list of users, their posts ("thoughts"), and their replies to posts ("reactions"). Users can add, update, and delete posts, comment on other users' posts, and add and remove friends.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Demonstration](#demonstration)
- [Challenges](#challenges)
- [Contact](#contact)

## Installation

Use 'npm i' or 'npm install' to install Express and mongoose. Then use the command 'npm start' to run the server. You will need a client like Insomnia to send requests.

## Usage

Send requests through your client. These are all the routes used:

&nbsp;

- Users: GET all, POST (api/users)

  - GET by ID, PUT, DELETE (api/users/:id)

&nbsp;

- Thoughts: GET all, POST (api/thoughts)

  - GET by ID, PUT, DELETE (api/thoughts/:id)

&nbsp;

- Friends: POST, DELETE (api/users/:id/friends)

&nbsp;

- Reactions: POST, DELETE (api/thoughts/:id/reactions)

&nbsp;

## Demonstration

The following videos will demonstrate all the different functions of this API.

### User Routes

![user routes demo video](./assets/api-user-routes.gif)

### Thought Routes

![thought routes demo video](./assets/api-thought-routes.gif)

## Adding and Removing Friends

![friend routes demo video](./assets/api-friends-routes.gif)

## Adding and Deleting Reactions

![reaction routes demo video](./assets/api-reactions-routes.gif)

## Challenges

The hardest parts of this assignment were getting a user's thoughts to be deleted when that user is deleted, and getting the friend and reaction counts to work appropriately. I still think there's room for improvement. For example, there's a few useless data fields that could probably be removed without consequence, and the pathing for the routes is a little convoluted with some redundancies, such as needing to specify the ID in both the path and the JSON body. Overall, I am happy with it, but it could definitely use some work to make it really streamlined.

## Contact

I can be reached here on GitHub at [brenhamp](https://github.com/brenhamp) if you have any questions or comments.
