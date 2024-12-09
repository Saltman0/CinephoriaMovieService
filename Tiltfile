docker_build('saltman0/nodejs-movie:dev', '.')

k8s_resource(
    workload='movie-nodejs-deployment',
    labels=["backend"]
)