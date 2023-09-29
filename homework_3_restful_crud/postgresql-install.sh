#!/bin/bash

helm repo update
helm repo add bitnami https://charts.bitnami.com/bitnami
helm install postgres bitnami/postgresql --version 12.10.0 -f postgres-values.yaml