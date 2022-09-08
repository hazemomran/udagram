# Udagram Pipeline

### GitHub
the project pushed on github repository which linked with circleci

### CircleCI
CircleCI reads `.circleci/config.yml` which tells circleci about what jobs he should do, we have 2 jobs (build , deploy)
1. build: runs the `build` script in the frontend and api
2. deploy: deploys the application on Elastic beanstalk and S3