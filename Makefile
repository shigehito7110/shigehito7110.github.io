up:
	docker-compose up -d
build:
	docker-compose build --no-cache --force-rm
down:
	docker-compose down --remove-orphans
ps:
	docker-compose ps
logs:
	docker-compose logs -f
restart:
	@make down
	@make build
	@make up
start:
	@make build
	@make up
node:
	docker-compose exec node sh
