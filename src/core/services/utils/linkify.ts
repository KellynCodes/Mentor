export function linkify(inputText: string, className: string) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return inputText.replace(
    urlRegex,
    (url: string) =>
      `<a class="${className}" href="${url}" target="_blank">${url}</a>`
  );
}
