import { PathLike } from 'fs';
import _ from 'lodash';

import buildDataforged from "./functions/buildDataforged";
import writeJson from './functions/io/writeJSON';

const pathOut: PathLike = "./";
// const legacyPathOut: PathLike = "./legacy/"

let data = buildDataforged();

_.forEach(data, (value, key) => {
  writeJson(pathOut.toString() + `starforged-${key}.json` as PathLike, value)
});