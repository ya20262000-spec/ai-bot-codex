"""Command-line interface for the AI Bot Codex service."""
import argparse

from services.greeting import build_greeting


def parse_args() -> argparse.Namespace:
    """Parse command-line arguments."""
    parser = argparse.ArgumentParser(description="AI Bot Codex CLI")
    parser.add_argument("name", nargs="?", default="there", help="Name to greet")
    return parser.parse_args()


def main() -> None:
    """Run the CLI entrypoint."""
    args = parse_args()
    print(build_greeting(args.name))


if __name__ == "__main__":
    main()
