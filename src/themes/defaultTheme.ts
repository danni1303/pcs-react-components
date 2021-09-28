import { Theme } from '../definitions/theme'
import { css } from '../theme-styled'

const COLORS = {
  BASE: '#ecf0f1',
  PRIMARY: '#273c75',
  BORDER: '#ddd',
  TEXT: '#2c3e50'
}

const defaultTheme: Theme = {
  name: 'Default Theme',
  prospectButtonColor: `css
  background-color: #273c75;
  `
  colors: {
    base: COLORS.BASE,
    primary: COLORS.PRIMARY,
    text: {
      onBase: COLORS.TEXT,
      onPrimary: COLORS.BASE,
      onNavigation: COLORS.BASE,
      onFullScreenScene: COLORS.BASE
    }
  },
  backgrounds: {
    main: css`
      background-color: white;
    `,
    offset: css`
      background-color: #eee;
    `,
    offsetEmphasis: css`
      background-color: #ddd;
    `,
    navigation: css`
      background-color: #4f5c72;
    `,
    fullScreenScene: css`
      background: linear-gradient(90deg, rgb(43, 77, 130), rgb(40, 144, 172)); ;
    `
  },
  border: css`
    border: 1px solid ${COLORS.BORDER};
    border-radius: 3px;
  `,
  dragOverOutline: css`
    outline: 2px dashed ${COLORS.BORDER};
  `,
  pushNotification: {
    text: 'black',
    background: 'white',
    border: 'rgba(0, 0, 0, 0.5)'
  }
}

export default defaultTheme
