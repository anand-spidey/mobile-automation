import { commonConf } from "../common.conf.js";
import { caps } from "./capabilites.js";
import dotenv from 'dotenv'

dotenv.config()
const deviceName = process.env.DEVICENAME;

const mainConf = {
    capabilities: [
        Object.assign({}, caps[deviceName].capabilities)
    ],
    specs: ['../src/features/login.feature']
}

let config = Object.assign({}, mainConf, commonConf)
export { config }