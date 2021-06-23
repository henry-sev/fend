import { checkForName } from '../src/client/js/nameChecker'

describe("Testing the check functionality", () => {
  test("Testing the checkForName() function", () => {
    expect(checkForName("Main dishes were quite good")).toBeTruthy()
    expect(checkForName("Main")).toBeFalsy()
  })
})