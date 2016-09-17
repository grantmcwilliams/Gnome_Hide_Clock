// Copyright (C) 2016 Grant McWilliams
// Licence: GPLv2+

const Main = imports.ui.main;
const SessionMode = imports.ui.sessionMode;

function init() {
}

function enable() {
    let mode = Main.sessionMode.currentMode;
    let center = SessionMode._modes[mode].panel.center;

    // do nothing if the clock isn't centered in this mode
    if ( center.indexOf('dateMenu') == -1 ) {
        return;
    }

    let centerBox = Main.panel._centerBox;
    let dateMenu = Main.panel.statusArea['dateMenu'];
    let children = centerBox.get_children();

    // only hide the clock if it's in the center box
    if ( children.indexOf(dateMenu.container) != -1 ) {
        centerBox.remove_actor(dateMenu.container);
   }
}

function disable() {
    let mode = Main.sessionMode.currentMode;
    let center = SessionMode._modes[mode].panel.center;

    let centerBox = Main.panel._centerBox;
    let dateMenu = Main.panel.statusArea['dateMenu'];

    centerBox.add_actor(dateMenu.container);
}
