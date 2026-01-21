"""Greeting service helpers."""

def build_greeting(name: str) -> str:
    """Return a friendly greeting for a given name."""
    cleaned = name.strip() or "there"
    return f"Hello, {cleaned}!"
