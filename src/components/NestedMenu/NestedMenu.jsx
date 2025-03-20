import React from 'react'
import menu from './menuData'
import MenuList from './MenuList'
import "./NestedMenu.css"
export default function NestedMenu() {
  return (
    <>
    <h2 style={{margin:0}}>Nested Menu</h2>
    <div id="nestedMenu">
      <MenuList list={menu}/>
    </div>
    </>
  )
}
