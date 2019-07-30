default: test
.PHONY: default

install_prerequisites:
	npm install
	npm install -g grunt
.PHONY: install_prerequisites

generate_tests:
	hiptest-publisher -c javascript-jasmine.conf -t "$(SECRET_TOKEN)" --without=actionwords
.PHONY: generate_tests

test: install_prerequisites
	grunt jasmine
.PHONY: test
