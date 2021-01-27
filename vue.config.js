module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Tinker's Helper";
      return args;
    });
  },
  transpileDependencies: ["vuetify"],
};
