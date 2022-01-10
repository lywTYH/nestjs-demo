const perfectEnv = new Proxy(process.env, {
  get: function (env, key: string) {
    const value = env[key];
    if (value == null) {
      throw new Error(`Missing ${key} ENV var`);
    }
    return value;
  },
});

export { perfectEnv };
