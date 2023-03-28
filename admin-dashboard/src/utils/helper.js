export function generateClasses(componentName, classes) {
  return classes.reduce((acc, curr) => {
    acc[curr] = `DashBoaard${componentName}-${curr}`;
    return acc;
  }, {});
}
