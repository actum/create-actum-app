import * as React from 'react'
import { Button } from '.'

export default { title: 'Button' }

export const withText = () => <Button>Hello Button</Button>

export const withEmoji = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
)
