import EnterFrame from ".";

const createApp = () => {
  return new Promise<HTMLElement>((resolve) => {
    const app = document.createElement("div");
    app.innerHTML = "Hello, World!";
    EnterFrame.add(() => {
      console.log("a");
    });
    EnterFrame.add(() => {
      console.log("b");
    });
    EnterFrame.addStatic(() => {
      console.log("static");
    });
    EnterFrame.play();

    setTimeout(() => {
      EnterFrame.destroy();
    }, 1000);

    setTimeout(() => {
      EnterFrame.play();
    }, 2000);

    resolve(app);
  });
};

export default createApp;

const appElement = document.getElementById("app");
if (appElement && appElement.children.length === 0) {
  createApp().then((app) => {
    appElement.appendChild(app);
  });
}
