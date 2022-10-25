const Main = imports.ui.main;
const Panel = Main.panel;

let dateMenu = Panel.statusArea.dateMenu;

function enable() {
      dateMenu.container.hide();
}

function disable() {
    	dateMenu.container.show();
}

function init() {
}
