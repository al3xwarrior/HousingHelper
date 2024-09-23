import Settings from '../../Settings';

register('soundPlay', (pos, name, volume, pitch, category, event) => {
    if (
        Settings().soundStealer === false || 
        volume <= 0 || 
        pitch <= 0 || 
        name.includes('step') || 
        name.includes('dig') || 
        name.includes('gui')
        ) return;
    ChatLib.chat(`&f[&dSound Stealer&f] &7Name: ${name} &r&7(Pitch: ${Math.round(10 * pitch) / 10} Volume: ${Math.round(10 * volume) / 10})`);
});
