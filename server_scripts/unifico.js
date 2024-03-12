onEvent("recipes", (event) => {
    if (global.unifico != {} && global.unifico != undefined) {
        console.log(`unifying ${Object.keys(global.unifico).length} thingamajigs`);

        for (let oredic of Object.keys(global.unifico)) {
            event.replaceInput(
                { input: oredic },      // recipes with this in input
                oredic,                 // must be replaced with
                global.unifico[oredic]  // this
            );

            event.replaceOutput(
                { output: oredic },     // recipes with this in output
                oredic,                 // must be replaced with
                global.unifico[oredic]  // this
            );
        };
    }
});

// other addon support

if (Platform.isLoaded("lootjs")) {
    console.log("lootjs detected, unifying loot tables");   
}