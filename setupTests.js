import '@testing-library/jest-dom/extend-expect'
import { configure } from '@testing-library/dom'

configure({
  testIdAttribute: 'data-test-id',
})


// I'm only doing this to add changes for a commit as part of the Odin Project GitHub section