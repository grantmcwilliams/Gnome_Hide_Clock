// Copyright (C) 2016 Grant McWilliams
// Licence: GPLv2+

const Main = imports.ui.main;
const SessionMode = imports.ui.sessionMode;

function init() {
}

function enable() {
    let mode = Main.sessionMode.currentMode;
    let center = SessionMode._modes[mode].panel.right;

    // do nothing if the clock isn't right aligned in this mode
    if ( right.indexOf('dateMenu') == -1 ) {
        return;
    }

    let rightBox = Main.panel._rightBox;
    let dateMenu = Main.panel.statusArea['dateMenu'];
    let children = rightBox.get_children();

    // only hide the clock if it's right alined
    if ( children.indexOf(dateMenu.container) != -1 ) {
        rightBox.remove_actor(dateMenu.container);
   }
}

function disable() {
    let mode = Main.sessionMode.currentMode;
    let right = SessionMode._modes[mode].panel.right;

    let rightBox = Main.panel._rightBox;
    let dateMenu = Main.panel.statusArea['dateMenu'];

	children = rightBox.get_children();
    rightBox.insert_child_at_index(dateMenu.container, children.length-1);

    //rightBox.add_actor(dateMenu.container);
}
