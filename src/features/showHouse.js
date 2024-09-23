import Settings from "../../Settings";
import {inHouse, getHouseName, getHouseOwner} from "../../utils";

register("renderOverlay", () => {
    if (!Settings().showHouse || !inHouse()) return;

    const x = Math.floor((Settings().showHouseXPos / 100) * Renderer.screen.getWidth());
    const y = Math.floor((Settings().showHouseYPos / 100) * Renderer.screen.getHeight());

    Renderer.scale(Settings().showHouseScale / 10);
    Renderer.drawString(`${getHouseName()}&f by${getHouseOwner()}`, x, y, Settings().showHouseBackgroundShadow);
});