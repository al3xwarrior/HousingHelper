/*
Completly stolen from BusterBrown1218, I was given permission
to put this into HousingHelper. Some alterations have been
made to the code to clean it up a bit.
*/

import Settings from '../util/Settings';

register('renderOverlay', () => {
    if (!Settings.showhouse) {
        return;
    }

    const tablines = TabList.getFooter().split('\n');

    if (tablines.length < 2) {
        return;
    }

    const secondLine = tablines[1];

    if (!secondLine.includes(`You are in `)) {
        return;
    }

    const ownerAndHouse = secondLine.substring(17).split('§r§7, by');
    const housename = ownerAndHouse[0];

    const x = Math.floor((Settings.showhousexpos / 100) * Renderer.screen.getWidth()) - 25;
    const y = Math.floor((Settings.showhouseypos / 100) * Renderer.screen.getHeight());
    Renderer.drawString(`&fCurrently playing: ${housename}`, x, y, true);
});
