docker_build('saltman0/nodejs-api:1.0.0')

k8s_resource(workload='movie-nodejs-deployment', port_forwards=3002, labels=["backend"])