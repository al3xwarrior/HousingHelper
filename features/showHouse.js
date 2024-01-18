/*
Completly stolen from BusterBrown1218, I was given permission
to put this into HousingHelper. Some alterations have been
made to the code to clean it up a bit.
*/
/*
Buster then cleaned up the cleanup and added back in
the features that Al3x randomly removed, and also fixed
a weird bug caused by Al3x's changes
*/

import Settings from '../util/Settings';

register('renderOverlay', () => {
    if (!Settings.showhouse) return;
    let tablines = TabList.getFooter().split('\n');

    if (tablines.length < 2) return;

    let match = tablines[1].match(/§r§r§fYou are in §r§a§r(.*), by §r§7§r(.*)/);
    if (!match) return;

    const x = Math.floor((Settings.showhousexpos / 100) * Renderer.screen.getWidth());
    const y = Math.floor((Settings.showhouseypos / 100) * Renderer.screen.getHeight());
    Renderer.drawString(`&fCurrently playing: ${match[1]}&f, by ${match[2]}`, x, y, true);
});
