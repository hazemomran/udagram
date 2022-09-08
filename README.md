# Deploying API project

## links
[s3 front-end](http://mynewapp-udacity.s3-website-us-east-1.amazonaws.com)
[Elastic beanstalk](http://myproject2.us-east-1.elasticbeanstalk.com)

## workflow
[x] handled the errors in the applications
[x] putting all the environment variables needed only
#### api
[x] build the api
[x] running the api localy and checking if it is working
[x] deploying the api on Elastic beanstalk
[x] put the environment variables in eb console conficuration
#### front-end
[x] put the api server link on environment.ts file
[x] build the front-end
[x] create s3 bucket called `mynewapp-udacity`

Now the application is available :heavy_check_mark: :heavy_check_mark: :heavy_check_mark:

### environment variables

POSTGRES_HOST=database-1.csj28cvwath0.us-east-1.rds.amazonaws.com
POSTGRES_USERNAME=postgres
POSTGRES_DB=postgres
POSTGRES_PASSWORD=thispass
dbPORT=5432
PORT=8080

