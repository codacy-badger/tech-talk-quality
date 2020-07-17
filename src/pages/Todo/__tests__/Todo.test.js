import { render } from '@testing-library/react'
import React from 'react'
import renderer from 'react-test-renderer'

import Todo from '../Todo'

describe('Tests for Todo page', () => {
  it('Should render without crash', () => {
    const tree = renderer.create(<Todo />)
    expect(tree.toJSON()).toMatchSnapshot()
  })

  it('Should render title', () => {
    const { getByText } = render(<Todo />)
    expect(getByText('Lista de tarefas')).toBeInTheDocument()
  });
})
