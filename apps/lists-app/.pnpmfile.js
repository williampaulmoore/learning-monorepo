module.exports = {
  hooks: {
    readPackage: (pkg) => {
      if (pkg.name === 'next') {
        return {
          ...pkg,
          scripts: {
            ...pkg.scripts,
            'dev:watch': 'chokidar "./.pnpmfile-change" -c "pnpm run dev"',
          },
        };
      }
      return pkg;
    },
  },
};

