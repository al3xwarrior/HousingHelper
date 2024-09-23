import {ChestMenu} from "ChestMenu";

const templatesGUI = new ChestMenu("&fTemplates", 3);

templatesGUI.setItems([
    null,null,null,null,null,null,null,null,null,
    new Item(422).setName("&e&lPlayTime").setLore(["hello", "WHAT", "", "&0ok"])
]);

register("command", () => {
    templatesGUI.open();
}).setName("templates");