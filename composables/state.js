export const useGlobalState = () => {
  return useState("globalState", () => ({
    menu: [
      {
        renderTitle: "应用 APPS",
      },
    ],
  }));
};
