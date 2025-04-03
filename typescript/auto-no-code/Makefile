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

# Run TypeScript build
build-ts:
	docker-compose exec app npm run build

# Start the app in development mode
dev:
	docker-compose exec app npm run dev
