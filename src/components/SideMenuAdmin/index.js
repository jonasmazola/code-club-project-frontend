import React, { useEffect, useState } from "react";
import { Container, ItemContainer, ListLinkItem } from "./style";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ListLink from "./menu-list";
import { useUser } from '../../hooks/UserContext'



export function SideMenuAdmin() {
const { logout } = useUser()



  return (
    <Container>
      <hr></hr>
      {ListLink.map((list) => (
        <ItemContainer key={list.id} isActive={true}>
          <list.icon className="icon" />
          <ListLinkItem to={list.link}>
            {list.label}
          </ListLinkItem>
        </ItemContainer>
      ))}
      <hr></hr>

      <ItemContainer style={{ position: 'absolute', bottom: '30px', width: '200px' }}>
        <ExitToAppIcon style={{ color: '#ffffff' }} />
        <ListLinkItem style={{ color: '#ffffff', marginLeft: '10px', cursor: 'pointer' }}
        to='/login' onClick={logout}>Sair</ListLinkItem>
      </ItemContainer>
    </Container>
  )
}
