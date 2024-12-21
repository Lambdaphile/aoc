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

export const asc = (a, b) => a - b

export const frequency = (x, xs) => R.pipe(
  R.countBy(R.identity),
  R.propOr(0, x)
)(xs)
