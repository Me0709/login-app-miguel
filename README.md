# login-app-miguel

Formulario de inicio de sesión desarrollado con HTML, CSS y JavaScript para el taller de control de versiones con Git y GitHub.

## Estrategia de ramas: GitHub Flow

- `main` contiene siempre una versión estable y publicable.
- Cada cambio se desarrolla en una rama corta (`feature/...`) creada desde `main`.
- Los cambios se integran mediante un Pull Request que otra persona revisa; la integración continua verifica el repositorio antes de fusionar.

Se eligió GitHub Flow porque el proyecto es pequeño, lo desarrollan pocas personas y no requiere versiones en paralelo: es más simple que Git Flow y mantiene el flujo de revisión por Pull Request.

## Convención de commits

Se usa Conventional Commits: `feat:`, `fix:`, `docs:`, `style:`, `refactor:` y `ci:`.
