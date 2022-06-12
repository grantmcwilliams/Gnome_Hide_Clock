// Copyright (C) 2016 Grant McWilliams
// Licence: GPLv2+

let clockMenu = Panel.statusArea.dateMenu;
let hiding;


function enable() {
      clockMenu.container.hide();
      hiding = clockMenu.actor.connect('notify::visible', actor => {
        actor.hide()
      })
}

function disable() {
        if(hiding){
                clockMenu.actor.disconnect(hiding);
        }
        clockMenu.container.show();
}

function init() {
}
