
start:
	cls && vite

build:
	npx vue-tsc -b && vite build

local:
	npx serve dist