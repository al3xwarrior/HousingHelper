import { Button } from './guiBuilder';

var direction = 'N/A';
var pitch = 'N/A';

var entity_x = 0;
var entity_y = 0;
var entity_z = 0;

var basedirection_middleX = Renderer.screen.getWidth() / 2 - 170;
var basedirection_middleY = Renderer.screen.getHeight() / 2 - 40;

const basedirection_up = new Button(basedirection_middleX, basedirection_middleY - 20, 20, 20, 'N');
const basedirection_down = new Button(basedirection_middleX, basedirection_middleY + 20, 20, 20, 'S');
const basedirection_left = new Button(basedirection_middleX - 20, basedirection_middleY, 20, 20, 'W');
const basedirection_right = new Button(basedirection_middleX + 20, basedirection_middleY, 20, 20, 'E');
const basedirection_upleft = new Button(basedirection_middleX - 20, basedirection_middleY - 20, 20, 20, '⬉');
const basedirection_upright = new Button(basedirection_middleX + 20, basedirection_middleY - 20, 20, 20, '⬈');
const basedirection_downleft = new Button(basedirection_middleX - 20, basedirection_middleY + 20, 20, 20, '⬋');
const basedirection_downright = new Button(basedirection_middleX + 20, basedirection_middleY + 20, 20, 20, '⬊');
const basedirection_middle = new Button(basedirection_middleX, basedirection_middleY, 20, 20, '⊙');

var pitch_middleX = Renderer.screen.getWidth() / 2 - 225;
var pitch_middleY = Renderer.screen.getHeight() / 2 - 20;

const pitch_top = new Button(pitch_middleX, pitch_middleY - 40, 20, 20, '⊙');
const pitch_up = new Button(pitch_middleX, pitch_middleY - 20, 20, 20, '⬆');
const pitch_middle = new Button(pitch_middleX, pitch_middleY, 20, 20, '⊙');
const pitch_down = new Button(pitch_middleX, pitch_middleY + 20, 20, 20, '⬇');
const pitch_bottom = new Button(pitch_middleX, pitch_middleY + 40, 20, 20, '⊙');

const start = new Button(basedirection_middleX - 20, basedirection_middleY + 60, 60, 20, 'START');

function start_direction() {
    var x = entity_x;
    var y = entity_y;
    var z = entity_z;

    ChatLib.chat(x + ' ' + y + ' ' + z);

    if (direction === 'UP') {
        z -= 1;
    }

    ChatLib.command('tp ' + x + ' ' + y + ' ' + z);
}

register('attackEntity', (npc, e) => {
    entity_x = npc.getX();
    entity_y = npc.getY();
    entity_z = npc.getZ();
    ChatLib.chat(entity_x + ' ' + entity_y + ' ' + entity_z);
});

register('guiRender', () => {
    if (Player.getContainer() === null || !Player.getContainer() || !Player) {
        return;
    }
    if (Player.getContainer().getName().includes('Edit NPC')) {
        basedirection_middleX = Renderer.screen.getWidth() / 2 - 170;
        basedirection_middleY = Renderer.screen.getHeight() / 2 - 40;
        pitch_middleX = Renderer.screen.getWidth() / 2 - 225;
        pitch_middleY = Renderer.screen.getHeight() / 2 - 20;

        basedirection_up.render(0, 0);
        basedirection_down.render(0, 0);
        basedirection_left.render(0, 0);
        basedirection_right.render(0, 0);
        basedirection_upleft.render(0, 0);
        basedirection_upright.render(0, 0);
        basedirection_downleft.render(0, 0);
        basedirection_downright.render(0, 0);
        basedirection_middle.render(0, 0);

        pitch_top.render(0, 0);
        pitch_up.render(0, 0);
        pitch_middle.render(0, 0);
        pitch_down.render(0, 0);
        pitch_bottom.render(0, 0);

        start.render(0, 0);

        Renderer.drawString('&a&lBetter NPC Positioning', pitch_middleX, pitch_middleY - 100, true);
        Renderer.drawString("&f1. &7Choose either Top, 45' Up,", pitch_middleX, pitch_middleY - 90, true);
        Renderer.drawString("&7Straight, 45' Down, or Down", pitch_middleX, pitch_middleY - 80, true);
        Renderer.drawString('&f2. &7Choose a Direction for', pitch_middleX, pitch_middleY - 70, true);
        Renderer.drawString('&7the NPC to face.', pitch_middleX, pitch_middleY - 60, true);
        Renderer.drawString('&f3. &7Click Start', pitch_middleX, pitch_middleY - 50, true);
    }
});

register('guiMouseClick', (x, y, butt) => {
    //if (Player.getContainer() === null || !Player.getContainer() || !Player) {return;}
    if (Player.getContainer().getName().includes('Edit NPC')) {
        function click_basedirection(button) {
            World.playSound('random.click', 0.5, 2.0);
            reset_basedirection_buttons();
            button.setEnabled(false);
        }

        function click_pitch(button) {
            World.playSound('random.click', 0.5, 2.0);
            reset_pitch_buttons();
            button.setEnabled(false);
        }

        if (x > basedirection_up.getX() && x < basedirection_up.getX() + basedirection_up.getWidth() && y > basedirection_up.getY() && y < basedirection_up.getY() + basedirection_up.getHeight()) {
            click_basedirection(basedirection_up);
            direction = 'UP';
        } else if (x > basedirection_down.getX() && x < basedirection_down.getX() + basedirection_down.getWidth() && y > basedirection_down.getY() && y < basedirection_down.getY() + basedirection_down.getHeight()) {
            click_basedirection(basedirection_down);
            direction = 'DOWN';
        } else if (x > basedirection_right.getX() && x < basedirection_right.getX() + basedirection_right.getWidth() && y > basedirection_right.getY() && y < basedirection_right.getY() + basedirection_right.getHeight()) {
            click_basedirection(basedirection_right);
            direction = 'RIGHT';
        } else if (x > basedirection_left.getX() && x < basedirection_left.getX() + basedirection_left.getWidth() && y > basedirection_left.getY() && y < basedirection_left.getY() + basedirection_left.getHeight()) {
            click_basedirection(basedirection_left);
            direction = 'LEFT';
        } else if (x > basedirection_upleft.getX() && x < basedirection_upleft.getX() + basedirection_upleft.getWidth() && y > basedirection_upleft.getY() && y < basedirection_upleft.getY() + basedirection_upleft.getHeight()) {
            click_basedirection(basedirection_upleft);
            direction = 'UP_LEFT';
        } else if (x > basedirection_upright.getX() && x < basedirection_upright.getX() + basedirection_upright.getWidth() && y > basedirection_upright.getY() && y < basedirection_upright.getY() + basedirection_upright.getHeight()) {
            click_basedirection(basedirection_upright);
            direction = 'UP_RIGHT';
        } else if (x > basedirection_downleft.getX() && x < basedirection_downleft.getX() + basedirection_downleft.getWidth() && y > basedirection_downleft.getY() && y < basedirection_downleft.getY() + basedirection_downleft.getHeight()) {
            click_basedirection(basedirection_downleft);
            direction = 'DOWN_LEFT';
        } else if (x > basedirection_downright.getX() && x < basedirection_downright.getX() + basedirection_downright.getWidth() && y > basedirection_downright.getY() && y < basedirection_downright.getY() + basedirection_downright.getHeight()) {
            click_basedirection(basedirection_downright);
            direction = 'DOWN_RIGHT';
        } else if (x > basedirection_middle.getX() && x < basedirection_middle.getX() + basedirection_middle.getWidth() && y > basedirection_middle.getY() && y < basedirection_middle.getY() + basedirection_middle.getHeight()) {
            click_basedirection(basedirection_middle);
            direction = 'MIDDLE';
        } else if (x > pitch_top.getX() && x < pitch_top.getX() + pitch_top.getWidth() && y > pitch_top.getY() && y < pitch_top.getY() + pitch_top.getHeight()) {
            click_pitch(pitch_top);
            pitch = 'TOP';
        } else if (x > pitch_up.getX() && x < pitch_up.getX() + pitch_up.getWidth() && y > pitch_up.getY() && y < pitch_up.getY() + pitch_up.getHeight()) {
            click_pitch(pitch_up);
            pitch = 'UP';
        } else if (x > pitch_middle.getX() && x < pitch_middle.getX() + pitch_middle.getWidth() && y > pitch_middle.getY() && y < pitch_middle.getY() + pitch_middle.getHeight()) {
            click_pitch(pitch_middle);
            pitch = 'MIDDLE';
        } else if (x > pitch_down.getX() && x < pitch_down.getX() + pitch_down.getWidth() && y > pitch_down.getY() && y < pitch_down.getY() + pitch_down.getHeight()) {
            click_pitch(pitch_down);
            pitch = 'DOWN';
        } else if (x > pitch_bottom.getX() && x < pitch_bottom.getX() + pitch_bottom.getWidth() && y > pitch_bottom.getY() && y < pitch_bottom.getY() + pitch_bottom.getHeight()) {
            click_pitch(pitch_bottom);
            pitch = 'BOTTOM';
        } else if (x > start.getX() && x < start.getX() + start.getWidth() && y > start.getY() && y < start.getY() + start.getHeight()) {
            if (direction === 'N/A' || pitch === 'N/A') {
                ChatLib.chat('&c&lYou need to set a valid direction and pitch before doing this!');
                World.playSound('mob.cat.meow', 0.5, 0.5);
                return;
            }

            if (!Player.isFlying()) {
                ChatLib.chat('&c&lYou must be flying to use &a&lBetter NPC Position&c&l!');
                World.playSound('mob.cat.meow', 0.5, 0.5);
                return;
            }

            World.playSound('random.click', 0.5, 2.0);
            start.setEnabled(false);
            start_direction();
        }
    }
});

register('guiClosed', (gui) => {
    if (gui.class.getName() !== 'net.minecraft.client.gui.inventory.GuiChest') return;
    reset_basedirection_buttons();
    reset_pitch_buttons();
    entity = undefined;
});

function reset_basedirection_buttons() {
    basedirection_left.setEnabled(true);
    basedirection_right.setEnabled(true);
    basedirection_down.setEnabled(true);
    basedirection_up.setEnabled(true);

    basedirection_upleft.setEnabled(true);
    basedirection_upright.setEnabled(true);
    basedirection_downleft.setEnabled(true);
    basedirection_downright.setEnabled(true);

    basedirection_middle.setEnabled(true);

    direction = 'N/A';
}

function reset_pitch_buttons() {
    pitch_top.setEnabled(true);
    pitch_up.setEnabled(true);
    pitch_middle.setEnabled(true);
    pitch_down.setEnabled(true);
    pitch_bottom.setEnabled(true);

    pitch = 'N/A';
}
