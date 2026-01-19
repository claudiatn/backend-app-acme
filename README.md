## 📌 Descripción

Este repositorio contiene el **backend** de la aplicación _Acme Tasks_. Es una API REST muy simple que expone:

- `GET /api/health` → estado del servicio
- `GET /api/tasks` → lista de tareas

El objetivo es que tú te centres en la parte DevOps.

## 📁 Estructura del repositorio

Código

```
backend-app/
  src/
    server.js
  package.json
  Dockerfile
  helm/
    Chart.yaml
    values.yaml
    values-dev.yaml
    templates/
      _helpers.tpl
      deployment.yaml
      service.yaml
  .github/
    workflows/
      ci.yml        # lo implementas tú
      cd.yml        # lo implementas tú
  .gitignore
  README.md
```

## 🧪 Endpoints

### `GET /api/health`

json

```
{
  "status": "ok",
  "service": "backend"
}
```

### `GET /api/tasks`

json

```
[
  { "id": 1, "title": "Aprender Kubernetes" },
  { "id": 2, "title": "Practicar Helm" },
  { "id": 3, "title": "Montar CI/CD con GitHub Actions" }
]
```

## 🐳 Docker

Build:

bash

```
docker build -t backend:dev .
```

Run:

bash

```
docker run -p 3000:3000 backend:dev
```

## ⎈ Helm

Despliegue manual:

bash

```
helm upgrade --install backend ./helm -n acme-dev
```

## 🔄 CI/CD

Este repo debe contener:

- `ci.yml` → llama a tu reusable CI
- `cd.yml` → llama a tu reusable CD

Tu trabajo es implementarlos en `platform-ci-cd`.

## 🧰 Requisitos previos

- Node.js (solo si quieres probar local)
- Docker
- Kubernetes local
- Helm
