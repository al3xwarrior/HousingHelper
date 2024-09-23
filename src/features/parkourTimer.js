import Settings from "../../Settings";

let timer = 0;
let minutes = 0;
let inParkour = false;
let hasStarted = false;

function startParkour() {
    if (!Settings().parkourtrackerenabled) return;
    timer = 0;
    minutes = 0;
    inParkour = true;
    hasStarted = true;
}

function endParkour() {
    if (!Settings().parkourtrackerenabled) return;
    inParkour = false;
    console.log(timer);
}

register('renderOverlay', () => {
    if (Settings().parkourtrackerenabled) {
        const x = Math.floor((Settings().parkourxpos / 100) * Renderer.screen.getWidth()) - 25;
        const y = Math.floor((Settings().parkourypos / 100) * Renderer.screen.getHeight());

        let seconds = timer / 20;

        if (seconds >= 60) {
            seconds = 0;
            timer = 0;
            minutes += 1;
        }

        let time = (minutes >= 1) ? `${minutes}m ${seconds}s` : `${seconds}s`;
        const parkourActive = Settings().parkouractive.replace('{time}', time);
        const parkourNotEnded = Settings().parkournotended.replace('{time}', time);

        if (hasStarted === false) {
            Renderer.drawString(Settings().parkournotstarted, x, y, true);
        } else if (inParkour) {
            Renderer.drawString(parkourActive, x, y, true);
        } else {
            Renderer.drawString(parkourNotEnded, x, y, true);
        }
    }
});

register('tick', () => {
    if (inParkour && Settings().parkourtrackerenabled) {
        timer += 1;
    }
});

register('chat', endParkour).setCriteria('Parkour challenge failed! Do not fly!');
register('chat', endParkour).setCriteria('${player} completed the parkour in ${minutes}:${seconds}.${miliseconds}!');
register('chat', startParkour).setCriteria('Reset your timer to 00:00! Get to the finish line!');
register('chat', startParkour).setCriteria('Parkour challenge started!');