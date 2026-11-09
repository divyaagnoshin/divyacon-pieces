/**
 * turndown-table-normalizer-plugin.ts
 *
 * A Turndown plugin that normalizes complex HTML tables — cells with
 * multi-paragraph content or nested lists, and cells using rowspan/
 * colspan — so they convert to clean GFM Markdown tables instead of
 * falling back to raw HTML pass-through.
 *
 * This is a general-purpose fix, not specific to any one source system.
 * Any HTML table with these characteristics will trip up GFM table
 * plugins (e.g. @joplin/turndown-plugin-gfm), regardless of where the
 * HTML came from — Confluence, Word/Google Docs exports, Notion
 * exports, CMS output, or scraped web pages. Wherever a <td>/<th>
 * contains a <p>, <div>, <ul>, <ol>, heading (<h1>-<h6>), <hr>, or
 * <blockquote>, or uses rowspan/colspan, this plugin applies. A
 * genuinely nested <table> inside a cell is left untouched, since
 * there is no lossless GFM representation for that — the outer table
 * correctly falls back to raw HTML in that one case.
 *
 * NOTE ON CONVENTION: unlike ordinary Turndown plugins — which
 * only ever call addRule()/keep()/remove() to register per-node
 * conversion rules — this plugin overrides turndownService.turndown()
 * itself. This is necessary because the problem it solves must be
 * fixed *before* any node-level rule runs (including a GFM plugin's
 * own table rule, which is what decides whether to render a table as
 * Markdown or bail to raw HTML). Rule-based interception was tried
 * and rejected: it would either lose the race against the GFM
 * plugin's table rule (if registered first) or require re-implementing
 * GFM's table rendering from scratch (if registered last).
 *
 * The upside of this approach: because it wraps the whole conversion
 * call rather than competing for rule-matching priority, it is
 * order-independent — it behaves identically whether you call
 * service.use(gfm) before or after service.use(tableNormalizer).
 *
 * NOTE ON DOM IMPLEMENTATION: this plugin uses jsdom to parse HTML
 * strings. Turndown itself uses a different parser internally
 * (@mixmark-io/domino) to convert string input into a DOM before any
 * rule runs — see the "leaky abstraction" note below — but Turndown
 * doesn't expose that internal parser for a plugin to reuse, so a
 * plugin needing pre-traversal DOM access has to bring its own. jsdom
 * is used here because it's already a dependency in this project's
 * environment; @mixmark-io/domino (the same lightweight parser
 * Turndown uses internally) is an equally valid, lighter-weight
 * choice if jsdom isn't already present elsewhere in your dependency
 * tree.
 *
 * WHY THIS NEEDS A PARSER AT ALL (leaky abstraction note): Turndown's
 * plugin API (addRule/keep/remove/use) only lets a plugin register
 * per-node conversion rules that run during Turndown's node-by-node
 * tree walk — strictly after HTML has already been parsed into a DOM.
 * There is no exposed hook for "run before parsing" or "run before
 * traversal begins," and no way to reach the parser/document Turndown
 * uses internally (it's a private, module-level singleton, not
 * attached to the TurndownService instance or its `options`). Since
 * this plugin's whole purpose is to normalize table structure BEFORE
 * any rule (including a GFM plugin's own table rule) ever sees it,
 * it has no choice but to do its own parsing when given a string.
 *
 * Usage:
 *   import TurndownService from 'turndown'  // or @joplin/turndown
 *   import { gfm } from 'turndown-plugin-gfm'  // or any GFM fork
 *   import tableNormalizer from './turndown-table-normalizer-plugin'
 *
 *   const service = new TurndownService()
 *   service.use(gfm)
 *   service.use(tableNormalizer)  // order relative to gfm doesn't matter
 *
 *   const markdown = service.turndown(html)
 */
import type TurndownService from 'turndown';
/**
 * Recursively flattens a single table cell's block-level content
 * (paragraphs, nested lists, headings, <hr>, <blockquote>) into a
 * single line using '<br>' as a separator, since GFM table cells
 * cannot contain block elements.
 *
 * Handles nesting at any depth, including lists nested inside list
 * items, and block content nested inside inline wrapper elements
 * (e.g. a <ul> inside a <span>). A genuinely nested <table> is left
 * as-is (see module docstring).
 *
 * @param cell - the <td> or <th> to flatten in place
 */
declare function flattenCellContent(cell: HTMLTableCellElement): void;
/**
 * Expands rowspan/colspan into a full rectangular grid by duplicating
 * cell content into every position the original cell spanned, since
 * GFM Markdown tables have no concept of merged cells.
 *
 * @param table
 * @param document - owner document, used to create new cell elements
 */
declare function expandSpans(table: HTMLTableElement, document: Document): void;
/**
 * Runs expandSpans + flattenCellContent on every <table> in a document.
 * @param document
 */
declare function normalizeTables(document: Document): void;
/**
 * Public shape of the exported plugin: callable (for service.use()),
 * with the underlying helpers attached for standalone use/testing.
 */
interface TurndownTableNormalizerPlugin {
    (turndownService: TurndownService): TurndownService;
    normalizeTables: typeof normalizeTables;
    expandSpans: typeof expandSpans;
    flattenCellContent: typeof flattenCellContent;
}
declare const plugin: TurndownTableNormalizerPlugin;
export = plugin;
//# sourceMappingURL=turndown-table-normalizer-plugin.d.ts.map