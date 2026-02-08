
start:
	cls && vite

build:
	npx vue-tsc -b && vite build

local:
	npx vite preview

prod:
	powershell -Command "if (Test-Path dist) { Remove-Item -Recurse -Force dist }" && \
	${MAKE} build && \
	cls && \
	${MAKE} local