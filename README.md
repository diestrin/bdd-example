# BDD Talk

This is an example repo on how to setup and run a BDD project implemented with Cucumber. The slides can be found [here](https://miro.com/app/board/uXjVOR-87yU=/?share_link_id=741780034590)

## Project structure

Inside packages there are 3 main folders:

- cms - A strapi backend with the models needed for the API
- web - A react frontend with a To Do app
- features - The Gherking tests created after following the Example Mapping session

To start the backend run `yarn cms start`
To start the frontend run `yarn web start`

The testing is managed by jest, so running `yarn web test` will run all the tests in the web project. This project uses a small abstraction of `jest-cucumber` located in the `features` package.

Neither the web and features folders are finish, this is intentional to use the project as a practice to implement BDD in a real life project
