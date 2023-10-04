## deploy app:

> kubectl apply -f secrets.yml
> bash postgresql-install.sh
> kubectl apply -f deployment.yml
> kubectl apply -f service.yml
> kubectl apply -f ingress.yml
> kubectl apply -f job.yml

## test crud via postman collection

> newman run postman_collection.json -e postman_environment.json

## screenshot with successfull newman run:

./newman_run.jpg

## delete app:

> kubectl delete job apply-migrations
> kubectl delete deployment nodejs-crud-service
> kubectl delete svc nodejs-crud-service
> kubectl delete ing crud-service-ingress
> helm delete postgres
> kubectl delete secret postgresql-secret