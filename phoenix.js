const globalModifier = ['alt', 'shift'];

/* Helper functions */
function setWindowSize(window, width, height) {
  window.setSize({
    width: width,
    height: height
  });
}

function setWindowPosition(window, x, y) {
  window.setTopLeft({
    x: x,
    y: y
  });
}


/* WINDOW SIZE AND POSITION */
// Center
const windowCenter = Key.on('s', globalModifier, () => {
  let screen = Screen.main().flippedVisibleFrame();
  let window = Window.focused();

  if (window) {
    setWindowSize(window, screen.width / 2, screen.height / 2);
    setWindowPosition(
      window,
      screen.x + screen.width / 4,
      screen.y + screen.height / 4
    );
  }
});

// Top Left
const windowTopLeft = Key.on('q', globalModifier, () => {
  let screen = Screen.main().flippedVisibleFrame();
  let window = Window.focused();

  if (window) {
    setWindowSize(window, screen.width / 2, screen.height / 2);
    setWindowPosition(window, screen.x, screen.y);
  }
});

// Left Half
const windowLeftHalf = Key.on('a', globalModifier, () => {
  let screen = Screen.main().flippedVisibleFrame();
  let window = Window.focused();
  
  if (window) {
    setWindowPosition(window, screen.x, screen.y)
    if (window.size().height === screen.height && window.size().width === screen.width / 2) {
      setWindowSize(window, screen.width * (2 / 3), screen.height)
    } 
    else if (window.size().height === screen.height && window.size().width === screen.width * (2 / 3)) {
      setWindowSize(window, screen.width * (1 / 3), screen.height)
    }
    else {
      setWindowSize(window, screen.width / 2, screen.height)
    }

  }
})

// Right Half
const windowRightHalf = Key.on('d', globalModifier, () => {
  let screen = Screen.main().flippedVisibleFrame();
  let window = Window.focused();
  
  if (window) {
    setWindowSize(window, screen.width / 2, screen.height)
    setWindowPosition(window, screen.width / 2, screen.y)
  }
  // TODO: cycle through thirds
})

// Bottom Left
const windowBottomLeft = Key.on('z', globalModifier, () => {
  let screen = Screen.main().flippedVisibleFrame();
  let window = Window.focused();

  if (window) {
    setWindowSize(window, screen.width / 2, screen.height / 2);
    setWindowPosition(
      window,
      screen.x,
      screen.y + screen.height - window.frame().height
    );
  }
});

// Top Right
const windowTopRight = Key.on('e', globalModifier, () => {
  let screen = Screen.main().flippedVisibleFrame();
  let window = Window.focused();

  if (window) {
    setWindowSize(window, screen.width / 2, screen.height / 2);
    setWindowPosition(
      window,
      screen.x + screen.width - window.frame().width,
      screen.y
    );
  }
});

// Bottom Right
const windowBottomRight = Key.on('c', globalModifier, () => {
  let screen = Screen.main().flippedVisibleFrame();
  let window = Window.focused();

  if (window) {
    setWindowSize(window, screen.width / 2, screen.height / 2);
    setWindowPosition(
      window,
      screen.x + screen.width - window.frame().width,
      screen.y + screen.height - window.frame().height
    );
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



/* TOGGLE KITTY */
const toggleKitty = Key.on('k', ['ctrl', 'cmd'], () => {
  let kitty = App.get('kitty')

  if (kitty) {
    kitty.isActive() ? kitty.hide() : kitty.focus()
  } else {
    App.launch('kitty')
  }
})

/* Log focused app name to logs               */
/* To see logs run this command in terminal:  */
/*      `log stream --process Phoenix`        */
Key.on('g', globalModifier, () => {
  let app = App.focused();
  Phoenix.log(app.name());
});
