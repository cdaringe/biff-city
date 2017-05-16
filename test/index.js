import test from 'ava'
import { biffCity, waitForIt } from '../src/'

test(t => {
  t.true(typeof biffCity() === 'string')
  t.truthy(biffCity().match(/biff/ig))
})

test(async t => {
  t.truthy(1)
  var res = await waitForIt()
  t.is(res, biffCity())
})
