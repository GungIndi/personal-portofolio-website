---
sidebar_position: 2
description: Workflow files for python app.
---

# Python Workflows

Github Workflows can be added by creating `.github/workflows` directory in your github repository and create a `.yaml` file in it. Below is the syntax example

### Simple Python Workflows

This is simple python web server workflows that had continous integration and continous delivery in it. It featured some python module like `Black Formatter` and `Bandit Security Check`.

```yaml
name: Python CI/CD

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

      - name: Set up Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.10'

      - name: Install dependencies
        run: |
          python -m pip install --upgrade pip
          pip install -r requirements.txt
          pip install black bandit

      - name: Run Black (Code Formatter)
        run: black --check .

      - name: Run Bandit (Security Check)
        run: bandit -r .

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