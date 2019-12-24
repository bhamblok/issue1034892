registerLayout('child-layout', class {
  async intrinsicSizes() {
    console.log('when will "intrinsicSizes" be ready?');
  }

  async layout(children) {
    console.log('layout: "child-layout"');
    return {
      childFragments: await Promise.all(
        children.map(child => child.layoutNextFragment()),
      ),
    };
  }
});