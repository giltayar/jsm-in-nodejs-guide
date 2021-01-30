import {promises as fs} from 'fs'
import url from 'url'
import {join} from 'path'
import {add} from './add.js'
import chalk from 'chalk'
const {underline} = chalk

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

const answer = add(40, 2)

const text = await fs.readFile(join(__dirname, 'text.txt'), 'utf8')

export function bannerInColor(color) {
  return text + ' ' + underline(chalk[color](answer))
}
