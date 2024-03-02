export const next = async (link, options) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  navigateTo(link, {
    // Check if link is external
    external: link.indexOf("http") === 0,
    ...options,
  });
};
