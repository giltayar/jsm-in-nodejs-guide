/**
 * Idea taken from Myles Borins node-osc package:
 * https://github.com/MylesBorins/node-osc/blob/main/rollup.config.mjs
 */
import {promises as fs} from 'fs'

const srcFiles = await fs.readdir(new URL('./src', import.meta.url))

export default {
  input: srcFiles.filter((file) => file.endsWith('.js')).map((x) => `src/${x}`),
  output: {
    dir: 'lib',
    format: 'cjs',
    entryFileNames: '[name].cjs',
    preserveModules: true,
  },
}
