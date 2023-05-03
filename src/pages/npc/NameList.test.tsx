import { render, within } from '@testing-library/react'
import { NameList } from './NameList'
import { describe, it, expect } from 'vitest'
import { Provider } from 'react-redux'
import { store } from '../../store/store'

describe('NameList', () => {
  it('should render', async () => {
    render(
      <Provider store={store}>
        <NameList names={[]}></NameList>
      </Provider>,
    )
  })

  it('should render names', async () => {
    const names: string[][] = [['Aedwulf', 'names:OF', 'Duvemåla']]
    const expected = 'Aedwulf names:OF Duvemåla'

    const { getByTestId } = render(
      <Provider store={store}>
        <NameList names={names}></NameList>
      </Provider>,
    )
    const { getByText } = within(getByTestId('namelist'))

    expect(getByText(expected)).toBeInTheDocument()
  })
})
