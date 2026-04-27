import type { Thing, WithContext } from 'schema-dts'

interface JsonLdProps {
  schema: Thing
}

export const JsonLd = ({ schema }: JsonLdProps) => {
  const objectSchema: WithContext<Thing> = {
    '@context': 'https://schema.org',
    // @ts-expect-error is not a string
    ...schema,
  }

  return (
    <script
      type='application/ld+json'
      // biome-ignore lint/security/noDangerouslySetInnerHtml: This is a JSON-LD script, not user-generated content.
      // biome-ignore lint/style/useNamingConvention: react convention
      dangerouslySetInnerHTML={{ __html: JSON.stringify(objectSchema) }}
    />
  )
}
