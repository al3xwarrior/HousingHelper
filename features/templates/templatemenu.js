const Mouse = Java.type('org.lwjgl.input.Mouse');
import { ChestMenu } from 'ChestMenu';
import loadAction from '../../../../modules/HousingEditor/api/loadAction';
import inputAnvil from '../../../../modules/HousingEditor/utils/inputAnvil';

var queue = [];

const templates = JSON.parse(FileLib.read('./config/ChatTriggers/modules/HousingHelper/templates.json'));

function findObject(name) {
    for (let i = 0; i < templates.length; i++) {
        if (templates[i].name.includes(name)) {
            return templates[i];
        }
    }
}

var menuItems = [];
for (let i = 0; i < templates.length; i++) {
    menuItems.push(new Item(templates[i].itemID).setName(templates[i].name).setLore(templates[i].lore).setDamage(templates[i].itemDAMAGE));
}

const menu = new ChestMenu('&dTemplates Menu', calculateRows(templates.length));
menu.setItems(menuItems);

const mouse = { x: -1, y: -1 };

function openTemplateMenu() {
    menu.open();
}

function importTemplate(template) {
    Client.currentGui.close();
    console.log(template);

    queue.push([findObject(template).type]);
    queue.push(['click', 50]);
    queue.push(['inputToAnvil', template]);
    queue.push(['loadHEAction', findObject(template).HEAction]);
}

menu.onClick((item, slotNumber) => {
    if (slotNumber < menu.getNumberOfSlots()) {
        mouse.x = Mouse.getX();
        mouse.y = Mouse.getY();

        const itemname = item.getName();
        if (itemname.includes('PlayTime')) {
            importTemplate('PlayTime');
        }
    }
});

register('command', () => {
    openTemplateMenu();
}).setName('templates');

function calculateRows(number) {
    if (number >= 1 && number <= 9) {
        return 1;
    }
    return Math.ceil(number / 9);
}

/*
QUEUE INFORMATION

"command" = Do /commands
"function" = Do /functions
"["inputToAnvil", string]" = Use HousingEditors inputAnvil function
"["click", int]" = Click the slot (num)
"["loadHEAction", string]" = Use HousingEditors loadAction function

*/
register('step', () => {
    if (queue.length < 0) {
        return;
    }

    const next = queue[0];
    if (!next) {
        return;
    }

    console.log(next);

    if (next.length < 2) {
        switch (next[0]) {
            case 'function':
                ChatLib.say('/functions');
                break;
            case 'command':
                ChatLib.say('/commands');
                break;
        }
    } else {
        switch (next[0]) {
            case 'click':
                Player.getContainer().click(next[1]);
                break;
            case 'inputToAnvil':
                inputAnvil(next[1]);
                break;
            case 'loadHEAction':
                loadAction(next[1]);
                break;
        }
    }

    queue.shift();
}).setDelay(1);

module.exports = {
    openTemplateMenu,
};
