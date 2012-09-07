# NOTE: timeout is set high since data is pulled from Azure

test: 
	@./node_modules/.bin/mocha -u tdd -R spec --timeout 20000
 
.PHONY:	test 