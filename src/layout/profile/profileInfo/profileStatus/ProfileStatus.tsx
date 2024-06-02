import React from "react";

type ProfileStatusPropsType = {
  status: string
  updateStatus: (status: string) => void;
};
type ProfileStatusLocalStateType = {
  state: {
    editMode: boolean
    status: string
  }
}
export class ProfileStatus extends React.Component<
  ProfileStatusPropsType, any> {
  state = {
    editMode: false,
    status: this.props.status
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }
  deactivateEditMode = () => {
    this.setState({
      editMode: false
    })
    this.props.updateStatus(this.state.status)
  }

  onStatusChange = (e: any) => {
    this.setState({
      status: e.currentTarget.value
    })
  }

  componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<any>, snapshot?: any) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
    console.log('component did update')
  }

  render() {
    return (
      <div>
        {!this.state.editMode &&
          <div>
            My status:&nbsp;
            <span
              onDoubleClick={this.activateEditMode}>
              {this.props.status || 'no status'}
            </span>
          </div>
        }
        {this.state.editMode &&
          <div>
            <input onBlur={this.deactivateEditMode}
                   autoFocus={true}
                   value={this.state.status}
                   onChange={this.onStatusChange}
            />
          </div>
        }
      </div>
    )
  }
}