import {promises as fs} from 'fs'
import url from 'url'
import {join} from 'path'
import {add} from './add.mjs'
import chalk from 'chalk'
const {red, underline} = chalk

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

const answer = add(40, 2)

console.log(await fs.readFile(join(__dirname, 'text.txt'), 'utf8'), underline(red(answer)))
