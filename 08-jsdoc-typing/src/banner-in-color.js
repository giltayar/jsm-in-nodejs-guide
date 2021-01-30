import {promises as fs} from 'fs'
import url, {URL} from 'url'
import {join} from 'path'
import {add} from './add.js'
const {default: chalk} = await import('chalk')
const {underline} = chalk

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

const answer = add(40, 2)

const text = await fs.readFile(join(__dirname, 'text.txt'), 'utf8')

/**
 * @param {string} color
 */
export function bannerInColor(color) {
  return text + ' ' + underline(chalk[color](answer))
}
