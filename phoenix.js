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
Key.on('s', ['ctrl', 'shift'], function() {
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
Key.on('q', ['ctrl', 'shift'], function() {
  let screen = Screen.main().flippedVisibleFrame();
  let window = Window.focused();

  if (window) {
    setWindowSize(window, screen.width / 2, screen.height / 2);
    setWindowPosition(window, screen.x, screen.y);
  }
});

// Bottom Left
Key.on('z', ['ctrl', 'shift'], function() {
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
Key.on('e', ['ctrl', 'shift'], function() {
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
Key.on('c', ['ctrl', 'shift'], function() {
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

// Maximize Window Size
Key.on('f', ['ctrl', 'shift'], () => {
  let window = Window.focused();

  if (window) window.maximize();
});


/* Log focused app name to logs               */
/* To see logs run this command in terminal:  */
/*      `log stream -- process Phonex`        */
Key.on('g', ['ctrl', 'shift'], () => {
  let app = App.focused();
  Phoenix.log(app.name());
});
