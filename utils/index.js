export const next = (link, nextOptions, options) => {
  if (nextOptions.disabled) {
    return false;
  }
  navigateTo(link, {
    // Check if link is external
    external: link.indexOf("http") === 0,
    ...options,
  });
};
