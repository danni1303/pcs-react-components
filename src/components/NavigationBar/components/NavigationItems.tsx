import React from 'react'
import CollapsedNavigationItem from './CollapsedNavigationItem';
import ExpandedNavigationItem from './ExpandedNavigationItem'
import { NavigationItem, Orientation } from '..';
import NavigationMenu from '../styled-components/NavigationMenu';
import { Loader } from 'semantic-ui-react'

interface NavigationItemsProps {
  items: NavigationItem[],
  loading?: boolean
  collapsed: boolean
  orientation: Orientation
  onClick: (item: NavigationItem) => void
  currentLocation: string
}


const NavigationItems = (props: NavigationItemsProps) => {
  const NavigationItemComponent = props.orientation === 'vertical' && props.collapsed ? CollapsedNavigationItem : ExpandedNavigationItem
  const activeItem = getActiveItem(props.items, props.currentLocation)
  const loader = <Loader active inline='centered' />
  const items = props.items.map(item => (<NavigationItemComponent active={activeItem?.path === item.path} key={item.path} orientation={props.orientation} item={item} onClick={props.onClick} />))

  const children = props.loading ? loader : items

  if (props.collapsed) {
    return <>
      {children}
    </>
  }

  return <NavigationMenu orientation={props.orientation}>{children}</NavigationMenu>

}

function getActiveItem(items: NavigationItem[], currentLocation: string): NavigationItem | undefined {
  const exactMatch = items.find(item => item.path === currentLocation)

  if (exactMatch) {
    return exactMatch
  }

  return items.find(item => currentLocation.startsWith(item.path))
}

export default NavigationItems
