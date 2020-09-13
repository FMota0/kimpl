# Kimpl

An university project for [Web development course](https://github.com/matheusgr/devweb).

Kimpl is an application to keep links to submissions to online judges (i.e. CodeForces, AtCoder, CodeChef ...) based in tags related to the submission content. For example it's possible to store a link A with tags [Implementation, Greedy] and later retrieve the link based in one of the tags.

## Deploy
![Api Deploy](https://github.com/fmota0/kimpl/workflows/Api%20Deploy/badge.svg)
![Client Deploy](https://github.com/fmota0/kimpl/workflows/Client%20Deploy/badge.svg)

### Api deploy instructions

The api is located in [api](api/):

`$ cd api`

To deploy the api is required to set an environment variable for MONGO_URL, which is an url for a mongodb database. And then is only required to run.

`$ yarn start`

Alternatively, it's possible to use the github action for deploy in heroku [api_deploy](.github/workflows/api_deploy.yml).

This alternative requires to set the following secrets in the repository: HEROKU_API_KEY and MONGO_URL.

### Client deploy instructions

The client is located in [client](client) and can be deployed as any react application. To deploy using github actions workflow it's necessary to add the following secrets to the repository: SURGE_LOGIN and SURGE_TOKEN. Also it's necessary to change the domain.