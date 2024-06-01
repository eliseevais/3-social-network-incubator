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

  render() {
    return (
      <div>
        {!this.state.editMode &&
          <div>
            My status:&nbsp;
            <span
              onDoubleClick={this.activateEditMode}>
              {this.props.status || '-----------'}
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