export const useGlobalState = () => {
  return useState("globalState", () => ({}));
};
