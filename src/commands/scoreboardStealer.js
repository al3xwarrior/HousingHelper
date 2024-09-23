register('command', () => {
    if (!Scoreboard.getScoreboard()) return ChatLib.chat("&c&lAre you sure theres a scoreboard?");

    //ChatLib.chat(new TextComponent(Scoreboard.getTitle()).setHover("show_text", `&eClick to Copy ${ChatLib.replaceFormatting(Scoreboard.getTitle())}&e to your clipboard.`).setClick("run_command", `/ct copy ${ChatLib.replaceFormatting(Scoreboard.getTitle()).replace("§", "&")}`))

    const lines = Scoreboard.getLines();
    for (let i = lines.length-1; i >= 0; i--) {
        console.log(lines[i]);
        ChatLib.chat(
            new TextComponent(lines[i])
                .setHover("show_text", `&eClick to Copy ${ChatLib.replaceFormatting(lines[i])}&e to your clipboard.`)
                .setClick("run_command", `/ct copy ${lines[i]}`)
        );
    }
}).setName('stealscoreboard');