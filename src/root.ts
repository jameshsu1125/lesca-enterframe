import EnterFrame from ".";

const createApp = () => {
  return new Promise<HTMLElement>((resolve) => {
    const app = document.createElement("div");
    app.innerHTML = "Hello, World!";
    console.log(EnterFrame);
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
