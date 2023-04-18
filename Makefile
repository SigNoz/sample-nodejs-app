REPONAME ?= signoz
IMAGE_NAME ?= sample-nodejs-app
DOCKER_TAG ?= latest

.PHONY: build-docker
build-docker:
	docker build -t $(IMAGE_NAME):$(DOCKER_TAG) .

.PHONY: build-push-docker
build-push-docker:
	docker buildx build --platform linux/arm64,linux/amd64 --push  -t $(REPONAME)/$(IMAGE_NAME):$(DOCKER_TAG) .
