import { readFileSync } from 'fs'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import * as R from 'ramda'

export const getInput = R.pipe(
  fileURLToPath,
  dirname,
  dir => readFileSync(resolve(dir, './input.txt'), { encoding: 'utf-8' })
)

export const run = (path, ...fns) => {
  if (process.env.NODE_ENV !== 'test') {
    const input = getInput(path)

    console.log(...fns.map(fn => fn(input)))
  }
}
