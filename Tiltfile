docker_build('saltman0/nodejs-movie:dev', '.', entrypoint=".")

k8s_resource(
    workload='movie-nodejs-deployment',
    labels=["backend"]
)