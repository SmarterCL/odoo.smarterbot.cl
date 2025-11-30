declare module 'next/types.js' {
  // Next.js 16 emits generated validators that import these types from next/types.js,
  // but the package does not export them. Provide minimal aliases to unblock builds.
  export type ResolvingMetadata = import('next').Metadata
  export type ResolvingViewport = import('next').Viewport
}
