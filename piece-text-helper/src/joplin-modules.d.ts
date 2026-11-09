// Vendored-adjacent types: @joplin/turndown has no types field; AP ships @types/turndown for this API.
declare module '@joplin/turndown' {
  export default class TurndownService {
    constructor(options?: unknown);
    remove(filter: string | string[]): this;
    use(plugin: unknown): this;
    turndown(html: string): string;
  }
}

declare module '@joplin/turndown-plugin-gfm' {
  export const gfm: unknown;
}
