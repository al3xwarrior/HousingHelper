register(("command"), (arg1, arg2) => {
    if (arg1 && arg2) {
        ChatLib.command("housing " + arg1 + " " + arg2);
    } else if (arg1) {
        ChatLib.command("housing " + arg1);
    } else {
        ChatLib.command("housing");
    }
}).setName("h");