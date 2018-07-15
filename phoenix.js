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

/* FOCUSED WINDOW SIZE AND POSITION */
// Center
const windowCenter = Key.on('s', ['ctrl', 'shift'], () => {
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
const windowTopLeft = Key.on('q', ['ctrl', 'shift'], () => {
  let screen = Screen.main().flippedVisibleFrame();
  let window = Window.focused();

  if (window) {
    setWindowSize(window, screen.width / 2, screen.height / 2);
    setWindowPosition(window, screen.x, screen.y);
  }
});

// Bottom Left
const windowBottomLeft = Key.on('z', ['ctrl', 'shift'], () => {
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
const windowTopRight = Key.on('e', ['ctrl', 'shift'], () => {
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
const windowBottomRight = Key.on('c', ['ctrl', 'shift'], () => {
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

const windowMaximize = Key.on('f', ['ctrl', 'shift'], () => {
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

// TODO:
/* TOGGLE KITTY */

/* Log focused app name to logs               */
/* To see logs run this command in terminal:  */
/*      `log stream --process Phoenix`        */
Key.on('g', ['ctrl', 'shift'], () => {
  let app = App.focused();
  Phoenix.log(app.name());
});
