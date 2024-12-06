docker_build('saltman0/nodejs-movie:dev', '.', entrypoint=".")

k8s_resource(
    workload='movie-nodejs-deployment',
    port_forwards=3002,
    labels=["backend"]
)