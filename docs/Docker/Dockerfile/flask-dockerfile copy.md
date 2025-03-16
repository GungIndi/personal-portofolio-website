---
sidebar_position: 1
---

# Flask Dockerfile

```docker title='Dockerfile'
FROM python:3.10-alpine

WORKDIR /app

COPY requirements.txt .

RUN pip3 install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["gunicorn", "-b", "0.0.0.0:8000", "app:app"]
```