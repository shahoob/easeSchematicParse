export function reBuild(version: any) {
  if (!version) {
    return new Error('Got nothing.');
  }
  else if (typeof version !== 'object') {
    return new Error(`Expected value to be \'object\', got '${typeof version}' instead.`);
  }
  const major: string = version.major;
  const minor: string = version.minor;
  const patch: string = version.patch;
  return `${major}.${minor}.${patch}`;
}
