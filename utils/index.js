export const next = (link, options) => {
  navigateTo(link, {
    // Check if link is external
    external: link.indexOf("http") === 0,
    ...options,
  });
};
