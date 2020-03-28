import { parse, reBuild } from './lib/app.js';

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

test('Rebuilding objects to version', () => {
    expect(reBuild({
        major: "0",
        minor: "1",
        patch: "0"
    })).toBe('0.1.0');
    expect(reBuild({
        major: "1",
        minor: "0",
        patch: "0"
    })).toBe('1.0.0');
});