declare namespace JSX {
  // Fallback intrinsic elements to keep Next app-router layouts compiling under TS 5.9 + Next 16 types.
  interface IntrinsicElements {
    [elemName: string]: any
  }
}
