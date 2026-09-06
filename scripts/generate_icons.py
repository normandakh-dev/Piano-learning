from pathlib import Path
from PIL import Image, ImageDraw


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "icons"
OUT.mkdir(exist_ok=True)


def make_icon(size: int, maskable: bool = False) -> Image.Image:
    scale = 4
    canvas = size * scale
    image = Image.new("RGBA", (canvas, canvas), "#245748" if maskable else "#f5f0e6")
    draw = ImageDraw.Draw(image)

    margin = int(canvas * (0.10 if maskable else 0.035))
    draw.rounded_rectangle(
        (margin, margin, canvas - margin, canvas - margin),
        radius=int(canvas * 0.23),
        fill="#245748",
    )

    def point(x: float, y: float) -> tuple[int, int]:
        inset = margin
        usable = canvas - inset * 2
        return int(inset + x * usable), int(inset + y * usable)

    stem_width = max(5, int(canvas * 0.047))
    draw.line((point(.50, .49), point(.50, .27)), fill="#fff9ec", width=stem_width)
    draw.polygon([point(.49, .31), point(.30, .18), point(.32, .08), point(.50, .15)], fill="#f19a76")
    draw.polygon([point(.51, .27), point(.58, .10), point(.79, .08), point(.70, .25)], fill="#f6c66f")

    key_top, key_bottom = .47, .86
    key_left, key_width = .15, .175
    outline = max(2, int(canvas * .014))
    for index in range(4):
        left = key_left + index * key_width
        x1, y1 = point(left, key_top)
        x2, y2 = point(left + key_width, key_bottom)
        draw.rounded_rectangle((x1, y1, x2, y2), radius=int(canvas * .035), fill="#fff9ec", outline="#245748", width=outline)

    for left in (.265, .615):
        x1, y1 = point(left, key_top)
        x2, y2 = point(left + .11, .70)
        draw.rounded_rectangle((x1, y1, x2, y2), radius=int(canvas * .025), fill="#172b25")

    return image.resize((size, size), Image.Resampling.LANCZOS)


make_icon(192).save(OUT / "icon-192.png", optimize=True)
make_icon(512).save(OUT / "icon-512.png", optimize=True)
make_icon(512, maskable=True).save(OUT / "icon-maskable-512.png", optimize=True)
