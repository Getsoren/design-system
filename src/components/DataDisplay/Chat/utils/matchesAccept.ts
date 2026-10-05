/**
 * Same rules as the `accept` attribute of a file input: extensions (".pdf"), wildcards ("image/*") or exact
 * mime types. An empty accept lets everything through.
 */
const matchesAccept = (file: Pick<File, "name" | "type">, accept?: string): boolean => {
  const tokens = accept
    ?.split(",")
    .map((token) => token.trim().toLowerCase())
    .filter(Boolean);

  if (!tokens?.length) {
    return true;
  }

  const fileName = file.name.toLowerCase();
  const mimeType = file.type.toLowerCase();

  return tokens.some((token) => {
    if (token.startsWith(".")) {
      return fileName.endsWith(token);
    }

    if (token.endsWith("/*")) {
      return mimeType.startsWith(token.slice(0, -1));
    }

    return mimeType === token;
  });
};

export default matchesAccept;
