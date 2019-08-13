import React from 'react'
import UserPicture from './UserPicture'
import { User as UserType } from 'client/types/crowi'

interface Props {
  user: UserType
  name: boolean
  username: boolean
}

export default class User extends React.Component<Props> {
  static defaultProps = { name: false, username: false }

  render() {
    const user = this.props.user
    const userLink = '/user/' + user.username

    const username = this.props.username
    const name = this.props.name

    return (
      <span className="user-component">
        <a href={userLink}>
          <UserPicture user={user} />

          {username && <span className="user-component-username">@{user.username}</span>}
          {name && <span className="user-component-name">({user.name})</span>}
        </a>
      </span>
    )
  }
}