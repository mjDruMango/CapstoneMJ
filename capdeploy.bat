@echo off

echo Authenticating Docker to Amazon ECR...
aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin public.ecr.aws/r8i9x4p6/capstonerepo

echo Building Docker images...
docker-compose build

echo Tagging Docker images for Amazon ECR...
docker tag backcap:latest public.ecr.aws/r8i9x4p6/capstonerepo/backcap:latest
docker tagfrontcap:latest public.ecr.aws/r8i9x4p6/capstonerepo/frontcap:latest

echo Pushing Docker images to Amazon ECR...
docker push public.ecr.aws/r8i9x4p6/capstonerepo/backcap:latest
docker push public.ecr.aws/r8i9x4p6/capstonerepo/frontcap:latest

echo Deploying Docker Compose application to Amazon ECS...
ecs-cli compose --file docker-compose.yml --project-name MJCapstone service up
