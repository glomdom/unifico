onEvent("jei.hide.items", (event) => {
    if (global.unifico != {} || global.unifico != undefined) {
        for (let thing of Object.keys(global.unifico)) {
            event.hide(thing);
        };
    }
});

onEvent("jei.add.items", (event) => {
    if (global.unifico != {} || global.unifico != undefined) {
        for (let thing of Object.keys(global.unifico)) {
            let addthing = global.unifico[thing];
            event.add(addthing);
        };
    }
});