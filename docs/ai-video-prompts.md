# MyPAS — AI video prompts

Two-step process for each scene: **image first** (Midjourney / ChatGPT / Gemini), and once there is an image you like, **animate it** (Kling / Runway / Veo / Sora — image-to-video).
Write the prompts in English; the tools understand it better.

## Shared style (identical in every scene — this is what keeps them consistent)

```
Editorial hand-drawn illustration, clean confident ink linework with soft flat color fills and subtle paper grain.
Limited palette: warm off-white paper (#F3F2EE) background, deep ink navy (#14162B) lines,
cobalt blue (#1F2CFF) as the main accent, with small touches of warm orange (#FF9A4D),
mint green (#45D6A0) and soft violet (#A99AFF). Calm, intelligent, premium B2B tone.
Natural daylight, generous negative space, no text, no letters, no logos, no UI writing on screens.
```

## Scene 1 — Home page hero (16:9)

**Image:**
```
[shared style]
A modern Tel Aviv tech office with large windows and a few plants. A small diverse team of four
professionals (two women, two men, 30s–50s, smart-casual) gathered around a wooden table with laptops,
one person pointing at a screen while others lean in, relaxed and focused. One laptop screen glows cobalt,
another orange, another mint green. Wide shot, eye level, characters in the lower two-thirds,
calm empty wall area above them. 16:9.
```

**Animation (image-to-video, 6–8 seconds):**
```
Subtle, calm, looping motion. Locked-off static camera, no zoom, no pan.
People make small natural movements: typing, a slight nod, one person turns their head to a colleague,
gentle breathing. Plant leaves sway slightly, soft daylight shifts across the table, steam rises from a coffee cup.
No new objects appear, faces and hands stay consistent, no morphing, no text.
Seamless loop: last frame matches the first frame.
```

## Scene 2 — MyPAS AI (16:9)

**Image:**
```
[shared style]
A single professional (woman, 30s) sitting comfortably at a desk with a laptop and a coffee mug,
leaning back with a satisfied, relaxed expression while her work gets done around her.
Empty space around her on both sides (for floating status labels added later in code).
Soft violet (#A99AFF) glow from the laptop screen. Medium-wide shot, eye level. 16:9.
```

**Animation (6–8 seconds):**
```
Subtle, calm, looping motion. Locked-off static camera.
She sips her coffee slowly and lowers the mug, glances at the laptop and smiles slightly.
Steam rises from the mug, the laptop glow pulses gently. No new objects, no text, no morphing.
Seamless loop: last frame matches the first frame.
```

## Consistency tips

- After you get a good image for scene 1, use it as a **style reference** for scene 2 (Midjourney: `--sref <image URL>`; ChatGPT/Gemini: attach the image and write "in exactly the same illustration style").
- In Kling / Runway, if there is a **Start frame + End frame** option, put the same image in both to get a perfect loop.
- Generate 3–4 variations of each step and keep only the calmest. Fast motion or deformed hands are an immediate no.
- Don't use photos of real employees; illustrated figures only.

## What to send me

Put the files in `public/media/raw/`:
- The final MP4 (the highest quality the tool offers)
- The source image (PNG) — it will serve as the poster frame until the video loads

I'll take it from there: compression (MP4 + WebM, ~2–4MB), a mobile crop, lazy loading, a pause button, a still image for users with reduced motion, and the status labels (Hebrew/English) on top of the video in HTML.
