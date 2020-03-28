export function parse(version: string) {
    if (typeof(version) !== 'string') {
        return new Error(`Expected value to be 'string', got '${typeof(version)}' instead.`);
    }
    let ver: string = version;
    ver.split('.');
    let obj: object = {
        major: ver[0],
        minor: ver[1],
        patch: ver[2]
    };
    return obj;
}

export function reBuild(version: any) { // If you're going to access a property from a object, it's gonna error. 'any' can fix it!
    if (!version) {
        return new Error('Got nothing.');
    } else if (typeof(version) !== 'object') {
        return new Error(`Expected value to be \'object\', got '${typeof(version)}' instead.`);
    }

    let major: string = version.major;
    let minor: string = version.minor;
    let patch: string = version.patch;

    return `${major}.${minor}.${patch}`;
}