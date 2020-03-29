import { parse } from './lib/parse.js';

test('Parsing versions', () => {
    expect(parse('1.0.0')).toStrictEqual({
        major: "1",
        minor: "0",
        patch: "0"
    });
    expect(parse('0.1.0')).toStrictEqual({
        major: "0",
        minor: "1",
        patch: "0"
    });
});