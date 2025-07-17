export function setHTMLDataAttribute(name: string, value: string) {
  const htmlTag = document.documentElement;
  localStorage.setItem(name, value);

  if (htmlTag) {
    htmlTag.setAttribute(name, value);
  }
}
