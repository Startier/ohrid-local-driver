import { Driver } from "@startier/ohrid";

const localDriver: Driver = {
  createNode(name, config, _rpcMethods, log) {
    const executeRemoteCalls =
      typeof config.settings?.executeRemoteCalls === "boolean" &&
      config.settings.executeRemoteCalls;
    return {
      currentService: name,
      log,
      async remoteCall(method, ...params): Promise<any> {
        if (!executeRemoteCalls) {
          throw new Error("Remote call not supported");
        }
        return await method.createCaller({
          currentService: method.service,
          log: log,
          remoteCall: this.remoteCall,
        })(...params);
      },
    };
  },
  getDockerfileExtensions() {
    return "";
  },
  async handleDockerCompose() {},
};

export default localDriver;
