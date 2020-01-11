include .env

.PHONY: stop run clean restart build in in-with-root stage-run stage-stop prod-run prod-in prod-stop

FILE_MATCH?=

stop:
	docker-compose stop

clean:
	docker-compose down

restart:
	docker-compose restart

install:
	docker-compose -f common-services.yml run --rm install

build:
	docker-compose -f common-services.yml run --rm build

lint:
	docker-compose -f common-services.yml run --rm lint

e2e-test:
	docker-compose -f common-services.yml run --rm e2e

e2e-open-test:
	docker-compose -f common-services.yml run --rm e2e_open

unit-test:
	docker-compose -f common-services.yml run --rm unit

unit-watch:
	docker-compose -f common-services.yml run --rm unit_watch

unit-snap:
	docker-compose -f common-services.yml run --rm unit_snap

unit-single:
	docker-compose -f common-services.yml run --rm unit_single

logs:
	docker-compose logs -f front

run:
	docker-compose up -d

in:
	docker-compose exec front /bin/bash

in-with-root:
	docker-compose exec --user root front /bin/bash

default: run
