CI_DOCKER_TAG=swr.cn-south-1.myhuaweicloud.com/newchiwan-guangzhou/truckego-tenant:${GO_PIPELINE_LABEL}
CI_DOCKER_TAG_LATEST=swr.cn-south-1.myhuaweicloud.com/newchiwan-guangzhou/truckego-tenant:latest

docker-build-local:
	GO_PIPELINE_COUNTER=local make docker-build-ci

docker-build-ci: build
	docker build -t $(CI_DOCKER_TAG_LATEST) -f ./Dockerfile .
	docker tag $(CI_DOCKER_TAG_LATEST) $(CI_DOCKER_TAG)
	docker push $(CI_DOCKER_TAG_LATEST)
	docker push $(CI_DOCKER_TAG)
	docker rmi $(CI_DOCKER_TAG)

build:
	rm -rf ./dist
	yarn build