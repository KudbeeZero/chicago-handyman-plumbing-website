interface StructuredDataProps {
  data: object | object[];
}

export function StructuredData({ data }: StructuredDataProps) {
  const schemas = Array.isArray(data) ? data : [data];
  return (
    <>
      {schemas.map((schema, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: JSON-LD scripts keyed by index is intentional
        // biome-ignore lint/security/noDangerouslySetInnerHtml: intentional JSON-LD injection
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
