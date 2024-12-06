docker_build('saltman0/nodejs-api:dev')

k8s_resource(workload='movie-nodejs-deployment', port_forwards=3002, labels=["backend"])