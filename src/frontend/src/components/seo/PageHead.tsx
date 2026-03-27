import { useEffect } from "react";
import { StructuredData } from "./StructuredData";

interface PageHeadProps {
  title: string;
  description: string;
  schema?: object | object[];
}

export function PageHead({ title, description, schema }: PageHeadProps) {
  useEffect(() => {
    document.title = title;
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", description);
  }, [title, description]);

  return schema ? <StructuredData data={schema} /> : null;
}
