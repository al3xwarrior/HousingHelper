const emojis = {
    "Hearts": "♥ ♡ ❤ ❥ ❣ ❦ ❧",
    "Hand Symbols": "☝ ☞ ☜ ☟ ✌ ✍ ☛ ☚",
    "Coin Symbols": "⛀ ⛁ ⛃ ⛂",
    "Skyblock Symbols": "❁ ❤ ❈ ❂ ✦ ✎ ☣ ☠ ⚔ ⫽ ✯ ♣ α ๑ ⸕ ✧ ☘ ⸎ ʬ ♨ ᠅ ≈ ❣ ✆ ✪ ☀ ☽ ⏣ ✌ ♲ ☀ ⚠ ✿ ♪ ♫ ⓪ ⓩ ▲ ⁍ ⚚ ✖ ✔ ➜ ﴾ ﴿ ☬ ☄ ⚑ Ⓑ ☺ ♞ ✷ ⦾",
    "Block Symbols": "❏ ❐ ❑ ❒ ▀ ▁ ▂ ▃ ▄ ▅ ▆ ▇ ▉ ▊ ▋ █ ▌ ▐ ▍ ▎ ▏ ▒ ░ ▓ ■ ▢",
    "Circle Symbols": "◉ ○ ◌ ◍ ◎ ● ◐ ◑ ◒ ◓ ◔ ◕ ◖ ◗ ❂ ☢ ⊗ ⊙ ◯ 〇 ⚫ ⬤ ◦ ⦿ ❍ ⊛ ⊚ ⊕ ⊖ • ∙",
    "Star and Flower Symbols": "★ ☆ ✡ ✦ ✧ ✩ ✪ ✫ ✬ ✭ ✮ ✯ ✰ ⁎ ⁑ ✢ ✣ ✤ ✥ ✱ ✲ ✳ ✴ ✵ ✶ ✷ ✸ ✹ ✺ ✻ ✼ ✽ ✾ ✿ ❀ ❁ ❂ ❃ ❇ ❈ ❉ ❊ ❋ ❄ ⋆ ✲ ࿏ ⭒ ⍟ ⭐",
    "Check Marks and X Marks": "✓ ✔ ✗ ✘",
    "Faces": "☺ ☻ ツ ㋡ ☹ ⍨ ☠ ⍤ ⍢",
    "Box Drawing Symbols": "─ ━ │ ┃ ┄ ┅ ┆ ┇ ┈ ┉ ┊ ┋ ┌ ┍ ┎ ┏ ┐ ┑ ┒ ┓ └ ┕ ┖ ┗ ┘ ┙ ┚ ┛ ├ ┝ ┞ ┟ ┠ ┡ ┢ ┣ ┤ ┥ ┦ ┧ ┨ ┩ ┪ ┫ ┬ ┭ ┮ ┯ ┰ ┱ ┲ ┳ ┴ ┵ ┶ ┷ ┸ ┹ ┺ ┻ ┼ ┽ ┾ ┿ ╀ ╁ ╂ ╃ ╄ ╅ ╆ ╇ ╈ ╉ ╊ ╋ ⚌ ⚍ ⚎ ⚏ ═ ║ ╒ ╓ ╔ ╕ ╖ ╗ ╘ ╙ ╚ ╛ ╜ ╝ ╞ ╟ ╠ ╡ ╢ ╣ ╤ ╥ ╦ ╧ ╨ ╩ ╪ ╫ ╬ ╭ ╮ ╯ ╰ ╴ ╵ ╶ ╷ ╸ ╹ ╺ ╻ ╼ ╽ ╾ ╿",
    "Arrow Symbols": "↕ ↖ ↗ ↘ ↙ ↪ ↩ ↺ ↻ ▶ ➜ ➨ ➡ ➠ ➟ ➩ ➪ ➫ ➬ ➭ ➮ ➯ ➱ ➲ ➥ ➦ ➛ ➘ ➙ ➚ ➔ ⇪ ⇩ ⇨ ⇧ ⇦ ↷"
}

var emojiMessages = [];

register("command", () => {
    ChatLib.chat("HELLO!");
    for (let i = 0; i < emojis.length; i++) {
        const group = emojis[i];
        ChatLib.chat(group);
    }
    ChatLib.chat("HELLO");
}).setName("emojis").setAliases(["unicode", "unicodes"]);