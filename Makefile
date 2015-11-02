.PHONY: bootstrap test

BIN = ./node_modules/.bin

bootstrap:
	@npm install

lint:
	@$(BIN)/standard

test: lint
	@./node_modules/karma/bin/karma start --single-run=true