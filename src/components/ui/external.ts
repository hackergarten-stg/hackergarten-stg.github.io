/** Attributes that open a link in a new tab without exposing `window.opener`. */
export const externalAttrs = (external = true) =>
  external ? { target: "_blank", rel: "noopener noreferrer" } : {};
