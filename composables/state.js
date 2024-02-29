export const useGlobalState = () => {
  return useState("globalState", () => ({
    menu: [
      {
        renderTitleName: "应用",
        renderTitleText: "APPS",
        to: "/apps",
      },
      {
        renderTitleName: "故事",
        renderTitleText: "STORIES",
        to: "https://stories.ldwid.com/",
      },
      {
        renderTitleName: "相册",
        renderTitleText: "STORIES",
        to: "https://stories.ldwid.com/",
      },
    ],
  }));
};
