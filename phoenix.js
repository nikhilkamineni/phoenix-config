const globalModifier = ['alt', 'shift'];

const screenFrame = Screen.main().frame()
const screenVisibleFrame = Screen.main().visibleFrame()
const MENU_BAR_HEIGHT = screenFrame.height - screenVisibleFrame.height


/* WINDOW SIZE AND POSITION */
// Center
const windowCenter = Key.on('s', globalModifier, () => {
  Phoenix.log(MENU_BAR_HEIGHT)
  let screen = Screen.main().flippedVisibleFrame();
  let window = Window.focused();

  if (window) {
    window.setFrame({
      width: screen.width / 2,
      height: screen.height / 2,
      x: screen.width / 4,
      y: screen.height / 4
    })
  }
});

// Top Left
const windowTopLeft = Key.on('q', globalModifier, () => {
  let screen = Screen.main().flippedVisibleFrame();
  let window = Window.focused();

  if (window) {
    window.setFrame({
      width: screen.width / 2,
      height: screen.height / 2,
      x: 0,
      y: 0
    })
  }
});


// Left Half
const windowLeftHalf = Key.on('a', globalModifier, () => {
  let screen = Screen.main().flippedVisibleFrame();
  let window = Window.focused();
  // let { width, height, x, y } = window.frame()
  
  if (window) {
    if (window.size().height === screen.height && 
        window.size().width === screen.width / 2 && 
        window.topLeft().x === 0) {
          window.setFrame({
            width: screen.width * (2 / 3),
            height: screen.height,
            x: 0,
            y: 0 + MENU_BAR_HEIGHT
          })
    } 

    // If window size is already 2/3 of screen set to 1/3
    else if (window.size().height === screen.height && 
             window.size().width === screen.width * (2 / 3) &&
             window.topLeft().x === 0) {
                window.setFrame({
                  width: screen.width * (1 / 3),
                  height: screen.height,
                  x: 0,
                  y: 0 + MENU_BAR_HEIGHT
                })
    }
    // Otherwise set window size to 1/2 of screen
    else {
      window.setFrame({
        width: screen.width / 2,
        height: screen.height,
        x: 0,
        y: 0 + MENU_BAR_HEIGHT
      })
    }
  }
})

// Right Half
const windowRightHalf = Key.on('d', globalModifier, () => {
  let screen = Screen.main().flippedVisibleFrame();
  let window = Window.focused();
  
  if (window) {
    // If windowsize is already 1/2 of screen set to 2/3
    if (window.size().height === screen.height && 
        window.size().width === screen.width / 2 && 
        window.topLeft().x === screen.width / 2) {
          window.setFrame({
            width: screen.width * (2 / 3),
            height: screen.height,
            x: screen.width * (1 / 3),
            y: 0 + MENU_BAR_HEIGHT
          })
    } 
    // If window size is already 2/3 of screen set to 1/3
    else if (window.size().height === screen.height && 
             window.size().width === screen.width * (2 / 3) &&
             window.topLeft().x === screen.width * (1 / 3)) {
              window.setFrame({
                width: screen.width * (1 / 3),
                height: screen.height,
                x: screen.width * (2 / 3),
                y: 0 + MENU_BAR_HEIGHT
              })
    }
    // Otherwise set window size to 1/2 of screen
    else {
      window.setFrame({
        width: screen.width / 2,
        height: screen.height,
        x: screen.width / 2,
        y: 0 + MENU_BAR_HEIGHT
      })
    }
  }
})

// Bottom Half
const windowBottomHalf = Key.on('x', globalModifier, () => {
  let screen = Screen.main().flippedVisibleFrame();
  let window = Window.focused();
  
  if (window) {
    // TODO: cycle through thirds
    window.setFrame({
      width: screen.width,
      height: screen.height / 2,
      x: 0,
      y: screen.height / 2 + MENU_BAR_HEIGHT
    })
  }
})

// Top Half
const windowTopHalf = Key.on('w', globalModifier, () => {
  let screen = Screen.main().flippedVisibleFrame();
  let window = Window.focused();
  
  if (window) {
    // TODO: cycle through thirds
    window.setFrame({
      width: screen.width,
      height: screen.height / 2,
      x: screen.x,
      y: screen.y
    })
  }
})

// Bottom Left
const windowBottomLeft = Key.on('z', globalModifier, () => {
  let screen = Screen.main().flippedVisibleFrame();
  let window = Window.focused();

  if (window) {
    window.setFrame({
      width: screen.width / 2,
      height: screen.height / 2,
      x: 0,
      y: screen.height / 2 + MENU_BAR_HEIGHT
    })
  }
});

// Top Right
const windowTopRight = Key.on('e', globalModifier, () => {
  let screen = Screen.main().flippedVisibleFrame();
  let window = Window.focused();

  if (window) {
    window.setFrame({
      width: screen.width / 2,
      height: screen.height / 2,
      x: screen.width - window.frame().width,
      y: 0
    })
  }
});

// Bottom Right
const windowBottomRight = Key.on('c', globalModifier, () => {
  let screen = Screen.main().flippedVisibleFrame();
  let window = Window.focused();

  if (window) {
    window.setFrame({
      width: screen.width / 2,
      height: screen.height / 2,
      x: screen.width / 2,
      y: screen.height / 2 + MENU_BAR_HEIGHT
    })
  }
});


/* TOGGLE MAXIMIZED WINDOW SIZE */
let = prevWindowPosition = null;

const windowMaximize = Key.on('f', globalModifier, () => {
  let screen = Screen.main().flippedVisibleFrame();
  let window = Window.focused();

  if (window) {
    // Restore previous window size if already maximized
    if (
      screen.width === window.frame().width &&
      screen.height === window.frame().height
    ) {
      window.setFrame(prevWindowPosition);
    }
    // Maximize window and store previous window size
    else {
      prevWindowPosition = window.frame();
      window.maximize();
    }
  }
});


/* TOGGLE OR LAUNCH APP HELPER FUNCTION*/
const toggleApp = (appName) => {
  const app = App.get(appName)
  if (app) {
    app.isActive() ? app.hide() : app.focus()
  } else {
    App.launch(appName)
  }
}

/* TOGGLE KITTY */
const toggleKitty = Key.on('k', ['ctrl', 'cmd'], () => toggleApp('kitty'))

/* TOGGLE CHROME */
const toggleChrome = Key.on('c', ['ctrl', 'cmd'], () => toggleApp('Google Chrome'))

/* TOGGLE SAFARI */
const toggleSafari = Key.on('s', ['ctrl', 'cmd'], () => toggleApp('Safari'))

/* TOGGLE VSCode */
// Need to use 'Visual Studio Code' to launch and 'Code' for toggling
const toggleVSCode = Key.on('v', ['ctrl', 'cmd'], () => {
  App.get('Code') ? toggleApp('Code') : App.launch('Visual Studio Code');
})

/* Log focused app name to logs               */
/* To see logs run this command in terminal:  */
/*      `log stream --process Phoenix`        */
Key.on('g', globalModifier, () => {
  let app = App.focused();
  Phoenix.log(app.name());
});
