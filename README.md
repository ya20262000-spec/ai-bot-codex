# ai-bot-codex

A starter FastAPI + CLI project.

## Requirements

- Python 3.10+

## Setup

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

## Run the API

```bash
uvicorn api.main:app --reload
```

Then visit `http://127.0.0.1:8000` for the health check or `http://127.0.0.1:8000/greet?name=Codex`.

## Run the CLI

```bash
python cli.py Codex
```
