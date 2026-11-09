"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomActionOutputSchema = exports.moduloActionOutputSchema = exports.divisionActionOutputSchema = exports.multiplicationActionOutputSchema = exports.subtractionActionOutputSchema = exports.additionActionOutputSchema = void 0;
// Every action returns a bare number, so each schema is a single whole-output
// field: value: '' resolves to the entire step output and adds no path segment.
const wholeNumberOutput = (key, label, description) => ({
    fields: [{ key, label, value: '', format: 'number', description }],
});
exports.additionActionOutputSchema = wholeNumberOutput('sum', 'Sum', 'The first number plus the second number.');
exports.subtractionActionOutputSchema = wholeNumberOutput('difference', 'Difference', 'The second number minus the first number.');
exports.multiplicationActionOutputSchema = wholeNumberOutput('product', 'Product', 'The first number multiplied by the second number.');
exports.divisionActionOutputSchema = wholeNumberOutput('quotient', 'Quotient', 'The first number divided by the second number. May be fractional.');
exports.moduloActionOutputSchema = wholeNumberOutput('remainder', 'Remainder', 'The remainder of the first number divided by the second number.');
exports.generateRandomActionOutputSchema = wholeNumberOutput('randomNumber', 'Random Number', 'A pseudo-random integer between the two numbers, inclusive.');
//# sourceMappingURL=output-schemas.js.map