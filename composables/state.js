export const useGlobalState = () => {
  return useState("globalState", () => ({
    theme: "light",
  }));
};
