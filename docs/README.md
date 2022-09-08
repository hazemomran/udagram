# Deploying API project

## links
[s3 front-end](http://mynewapp-udacity.s3-website-us-east-1.amazonaws.com)
[Elastic beanstalk](http://myproject2.us-east-1.elasticbeanstalk.com)

## workflow
1. handled the errors in the applications
2. putting all the environment variables needed only
#### api
1. build the api
2. running the api localy and checking if it is working
3. deploying the api on Elastic beanstalk
4. put the environment variables in eb console conficuration
#### front-end
1. put the api server link on environment.ts file
2. build the front-end
3. create s3 bucket called `mynewapp-udacity`

Now the application is available :heavy_check_mark: :heavy_check_mark: :heavy_check_mark:

### environment variables

POSTGRES_HOST=database-1.csj28cvwath0.us-east-1.rds.amazonaws.com
POSTGRES_USERNAME=postgres
POSTGRES_DB=postgres
POSTGRES_PASSWORD=thispass
dbPORT=5432
PORT=8080

