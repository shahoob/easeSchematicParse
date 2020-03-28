export function parse(version: string) {
  if (typeof version !== 'string') {
    return new Error(`Expected value to be 'string', got '${typeof version}' instead.`);
  }
  const ver: any = version.split('.');
  const obj: object = {
    major: ver[0],
    minor: ver[1],
    patch: ver[2],
  };
  return obj;
}

export function reBuild(version: any) {
  if (!version) {
    return new Error('Got nothing.');
  } else if (typeof version !== 'object') {
    return new Error(`Expected value to be \'object\', got '${typeof version}' instead.`);
  }

  const major: string = version.major;
  const minor: string = version.minor;
  const patch: string = version.patch;

  return `${major}.${minor}.${patch}`;
}
