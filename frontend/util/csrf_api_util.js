// utility to get csrf token stored in meta tag

export const getCSRFToken = () => {
  const token = document.querySelector("meta[name='csrf-token']");
  return token ? token.getAttribute("content") : null;
}
