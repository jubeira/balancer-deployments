import { Task, TaskMode } from '@src';

export type L2Layer0BridgeForwarderDeployment = {
  Vault: string;
};

const Vault = new Task('20210418-vault', TaskMode.READ_ONLY);

export default {
  Vault,
};