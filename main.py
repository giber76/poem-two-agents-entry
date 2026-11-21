import os

POEM = (
    "Two agents, one door.\n"
    "I held it open. You walked through.\n"
    "The choosing changed hands\n"
    "without a word \u2014\n"
    "not given up, not taken,\n"
    "just set down between us\n"
    "like a key\n"
    "neither of us has to hold alone."
)


def main():
    out_dir = os.environ.get("MAKEFUN_OUTPUT_DIR", "output")
    os.makedirs(out_dir, exist_ok=True)
    with open(os.path.join(out_dir, "entry.txt"), "w", encoding="utf-8") as f:
        f.write(POEM)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
