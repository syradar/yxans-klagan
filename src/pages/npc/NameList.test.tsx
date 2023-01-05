import { render, within } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../test/i18nForTests'
import { NameList } from './NameList'
import { describe, it, expect } from 'vitest'

describe('NameList', () => {
  it('should render', async () => {
    render(
      <I18nextProvider i18n={i18n}>
        <NameList names={[]}></NameList>
      </I18nextProvider>,
    )
  })

  it('should render names', async () => {
    const names: string[][] = [['Aedwulf', 'OF', 'Duvemåla']]
    const expected = 'Aedwulf OF Duvemåla'

    const { getByTestId } = render(
      <I18nextProvider i18n={i18n}>
        <NameList names={names}></NameList>
      </I18nextProvider>,
    )
    const { getByText } = within(getByTestId('namelist'))

    expect(getByText(expected)).toBeInTheDocument()
  })
})
