import Settings from '../../Settings';
import { inCreative } from '../../utils';

register("hitBlock", (block, e) => {
    if (!inCreative() || !Settings().antichestbreak) return;

    const blockName = block.type.name;
    if (blockName === 'Chest' || blockName === 'Trapped Chest') {
        cancel(e);
        ChatLib.chat("&f[&cAnti Chest Break&f]&7 You've been canceled from &cbreaking a chest&7!");
        World.playSound('note.bd', 1.0, 0.5);
    }
});
