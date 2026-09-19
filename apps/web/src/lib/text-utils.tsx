export function italicizeWords(
  sentence: string,
  wordsToItalicize: string | string[],
  color?: string,
) {
  const targets = Array.isArray(wordsToItalicize)
    ? wordsToItalicize
    : [wordsToItalicize];
  if (targets.length === 0) return sentence;

  const escaped = targets.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const pattern = new RegExp(`\\b(${escaped.join("|")})\\b`, "gi");
  const parts = sentence.split(pattern);

  return parts.map((part, index) => {
    const isMatch = targets.some((t) => t.toLowerCase() === part.toLowerCase());
    return isMatch ? (
      <em key={index} style={color ? { color } : undefined}>
        {part}
      </em>
    ) : (
      <span key={index}>{part}</span>
    );
  });
}
