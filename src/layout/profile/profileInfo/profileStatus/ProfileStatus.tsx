import React from "react";

export class ProfileStatus extends React.Component<any, any> {
  state = {
    editMode: false
  }

  activateEditMode = () => {
    console.log('this', this)
    this.setState({
      editMode: true
    })
  }
  deactivateEditMode = () =>  {
    this.setState({
      editMode: false
    })
  }

  render() {
    return (
      <div>
        {!this.state.editMode &&
          <div>
            My status:&nbsp;
            <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
          </div>
        }
        {this.state.editMode &&
          <div>
            <input onBlur={this.deactivateEditMode}
                   autoFocus={true}
                   value={this.props.status} />
          </div>
        }
      </div>
    )
  }
}