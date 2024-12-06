docker_build('saltman0/nodejs-movie:1.0.0', '.', entrypoint=".")

k8s_resource(
    workload='movie-nodejs-deployment',
    port_forwards=3002,
    labels=["backend"]
)