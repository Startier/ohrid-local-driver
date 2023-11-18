import { Driver } from "@startier/ohrid";

const localDriver: Driver = {
  createNode(name, _config, _rpcMethods, log) {
    return {
      currentService: name,
      log,
      remoteCall() {
        throw new Error("Remote call not supported");
      },
    };
  },
  getDockerfileExtensions() {
    return "";
  },
  async handleDockerCompose() {},
};

export default localDriver;
