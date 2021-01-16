import { FlattenSimpleInterpolation } from 'styled-components'

export interface Theme {
  name: string
  colors: {
    base: string
    primary: string
    text: {
      onBase: string
      onPrimary: string
      onNavigation: string
      onLogin: string
    }
  }
  backgrounds: {
    main: FlattenSimpleInterpolation
    offset: FlattenSimpleInterpolation
    offsetEmphasis: FlattenSimpleInterpolation
    navigation: FlattenSimpleInterpolation
    login: FlattenSimpleInterpolation
  }
  border: FlattenSimpleInterpolation
  dragOverOutline: FlattenSimpleInterpolation
}
