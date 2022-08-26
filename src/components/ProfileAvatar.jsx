import React from 'react'
import { Avatar } from 'rsuite'
import { getNameInitials } from '../misc/helpers'

function ProfileAvatar({name, ...avatarProps}) {
  return (
    <div>
        <Avatar circle {...avatarProps}>
      {getNameInitials(name)}
        </Avatar>
    </div>
  )
}

export default ProfileAvatar