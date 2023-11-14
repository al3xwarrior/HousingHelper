const EntityOtherPlayerMP = Java.type("net.minecraft.client.entity.EntityOtherPlayerMP");
const ResourceLocation = net.minecraft.util.ResourceLocation;
const ThreadDownloadImageData = net.minecraft.client.renderer.ThreadDownloadImageData;
const ImageBufferDownload = net.minecraft.client.renderer.ImageBufferDownload;
const NetworkPlayerInfo = net.minecraft.client.network.NetworkPlayerInfo;
const textureManager = Client.getMinecraft().func_110434_K(); // getTextureManager

export function createFakePlayer(xpos, ypos, zpos, pitch, yaw, name, skinURL) {
    let skinType = "default"
    const mojangProfile = JSON.parse(
        FileLib.getUrlContent(
            "https://sessionserver.mojang.com/session/minecraft/profile/42986ec349454aa0852a1ec92a48cf99"
        )
    );
    const decodedTextureData = JSON.parse(
        java.util.Base64.getDecoder()
            .decode(mojangProfile.properties[0].value)
            .map((c) => java.lang.Character.toString(c))
            .join("")
    );
  
    const skinID = skinURL.split("/").pop();
    const resourceLocation = new ResourceLocation("minecraft:skins/" + skinID);
    const textureObject = new ThreadDownloadImageData(
        null,
        skinURL,
        null,
        new ImageBufferDownload()
    );
    textureManager.func_110579_a(resourceLocation, textureObject); // loadTexture
  
    const profile = new com.mojang.authlib.GameProfile(
        java.util.UUID.randomUUID(),
        name
    );
  
    const otherPlayer = new EntityOtherPlayerMP(World.getWorld(), profile);
  
    const playerInfo = new NetworkPlayerInfo(profile);
    ReflectionHelper.setPrivateValue(
        net.minecraft.client.network.NetworkPlayerInfo,
        playerInfo,
        resourceLocation,
        "locationSkin",
        "field_178865_e"
    );
  
    ReflectionHelper.setPrivateValue(
        net.minecraft.client.network.NetworkPlayerInfo,
        playerInfo,
        skinType,
        "skinType",
        "field_178863_g"
    );
  
    ReflectionHelper.setPrivateValue(
        net.minecraft.client.entity.AbstractClientPlayer,
        otherPlayer,
        playerInfo,
        "playerInfo",
        "field_175157_a"
    );
    
    console.log(otherPlayer.func_145782_y());
    console.log(otherPlayer);
  
    otherPlayer.func_70034_d(pitch); // Set pitch (vertical rotation)
    otherPlayer.func_70107_b(xpos, ypos, zpos); // set coords
    World.getWorld().func_73027_a(otherPlayer.func_145782_y(), otherPlayer); // spawns the entity in the world
    return otherPlayer;
};

export function removeFakePlayer(fakePlayerEntity) {
    if (fakePlayerEntity) {
        // Remove the fake player from the world
        World.getWorld().func_72973_f(fakePlayerEntity);
        fakePlayerEntity = null; // Reset the variable
    }
}