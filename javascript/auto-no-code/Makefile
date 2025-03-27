.PHONY: build up down restart logs shell

# Build the Docker image
build:
	docker-compose build

# Start the container in detached mode
up:
	docker-compose up -d

# Stop and remove containers
down:
	docker-compose down

# Restart the container
restart:
	docker-compose restart

# Show logs
logs:
	docker-compose logs -f

# Open shell inside the container
shell:
	docker-compose exec app sh
