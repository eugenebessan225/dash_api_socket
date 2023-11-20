## The dash api

## Table Of Contents
- [About the Project](#about-the-project)
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [TODO](#todo)

## About The Project
This is an API that is used by the dashboard to reload the the previous state after refreshing.
!!!!!!!! The name in the service VM is api-etat

## Built With
Javascript, NodeJs

## Getting Started
### Prerequisites

### Installation
1-Clone the repo
```sh
git clone https://github.com/eugenebessan225/dash_api_socket.git
```
2-Install dependencies
```sh
npm install
```
## usage
### Run app
```sh
npm run start
```
### API documentation
  - "/" At the load of the dashboard, an api call is made to get the previous state saved
  - Every time a click is made, there is an api call to update the new state and save
  - The state is saved in a json file.
