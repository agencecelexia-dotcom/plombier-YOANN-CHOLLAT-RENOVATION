import { localBusinessSchema } from "@/lib/schema";

export function SchemaOrg() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessSchema()),
      }}
    />
  );
}
