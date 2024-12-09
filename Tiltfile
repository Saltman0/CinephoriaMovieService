docker_build('saltman0/nodejs-movie:1.0.0', '.')

k8s_resource(
    workload='movie-nodejs-deployment',
    labels=["backend"]
)