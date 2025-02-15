---
sidebar_position: 3
description: Workflow files for python app.
---

# Node Js Workflows

Github Workflows can be added by creating `.github/workflows` directory in your github repository and create a `.yaml` file in it. Below is the syntax example

### Simple Node.Js Workflows

This is simple Node.Js workflows that had continous integration and continous delivery in it. It featured test like `npm audit`.

```yaml
name: NodeJs CI/CD

on:
  push:
    branches:
      - main

jobs:
  code-quality:
    name: Code Quality Checks
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18

      - name: Install dependencies
        run: npm install

      - name: Run security audit
        run: npm audit --audit-level=high

  build-and-release:
    needs: code-quality
    name: Build and Push to Docker Hub
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v4

    - name: Set up Docker Buildx
      uses: docker/setup-buildx-action@v3

    - name: Login to Docker Hub
      uses: docker/login-action@v3
      with:
        username: ${{ secrets.DOCKERHUB_USERNAME }}
        password: ${{ secrets.DOCKERHUB_TOKEN }}
      
    - name: Build and push
      uses: docker/build-push-action@v5
      with:
        context: .
        push: true
        tags: myrepository/myimage:latest
```