// Copyright (C) 2016 Grant McWilliams
// Licence: GPLv2+

const Main = imports.ui.main;
const Panel = Main.panel;

let ClockMenu = Panel.statusArea.dateMenu;

function enable() {
      clockMenu.container.hide();
}

function disable() {
        clockMenu.container.show();
}

function init() {
}

