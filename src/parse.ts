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
