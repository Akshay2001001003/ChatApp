import React from 'react'
import { Button, Drawer, Icon } from 'rsuite'
import Dashboard from '.'
import { useModelState } from '../../misc/custom-hooks'

function DashboardToggle() {

    const {isOpen,close,open} = useModelState();

  return (
    <>
    <Button block color = "blue" onClick = {open}>
        <Icon icon = "dashboard"/>
       Dashboard
    </Button>  
    <Drawer show={isOpen} onHide={close} placement='left'>
      <Dashboard />
    </Drawer>
    </>
  )
}

export default DashboardToggle