"""FastAPI application entrypoint."""
from fastapi import FastAPI, Query

from services.greeting import build_greeting

app = FastAPI(title="AI Bot Codex", version="0.1.0")


@app.get("/")
def read_root() -> dict[str, str]:
    """Health check endpoint."""
    return {"status": "ok"}


@app.get("/greet")
def greet(name: str = Query(default="there", min_length=1)) -> dict[str, str]:
    """Return a greeting for the provided name."""
    return {"message": build_greeting(name)}
