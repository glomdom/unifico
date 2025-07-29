onEvent("recipes", (event) => {
    if (global.unifico != {} && global.unifico != undefined) {
        console.log(`unifying ${Object.keys(global.unifico).length} thingamajigs`);

        for (let oredic of Object.keys(global.unifico)) {
            event.replaceInput(
                oredic,                 // recipes with this in input
                global.unifico[oredic]  // must be replaced with this
            );

            event.replaceOutput(
                oredic,                 // recipes with this in output
                global.unifico[oredic]  // must be replaced with this
            );
        };
    }
});

// other addon support

if (Platform.isLoaded("lootjs")) {
    console.log("lootjs detected, unifying loot tables");   
}