import React from 'react'
import RectSpinnerInput from './RectSpinnerInput'
import CircleSpinnerInput from './CircleSpinnerInput'

export default class GigForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: props.gig ? props.gig.title : '',
      description: props.gig ? props.gig.description : '',
      skills: props.gig ? props.gig.skills : '',
      daysNeeded: props.gig ? props.gig.daysNeeded : '',
      hoursNeeded: props.gig ? props.gig.hoursNeeded : '',
      //dDescriptions: props.gig ? [props.gig.d1Description, props.gig.d2Description, props.gig.d3Description] : ['' , '', ''],
      //dHoursNeeded: props.gig ? [props.gig.d1HoursNeeded, props.gig.d2HoursNeeded, props.gig.d3HoursNeeded] : ['' , '', ''],
      d1Description: props.gig ? props.gig.d1Description : '',
      d2Description: props.gig ? props.gig.d2Description : '',
      d3Description: props.gig ? props.gig.d3Description : '',
      d1HoursNeeded: props.gig ? props.gig.d1HoursNeeded : '',
      d2HoursNeeded: props.gig ? props.gig.d2HoursNeeded : '',
      d3HoursNeeded: props.gig ? props.gig.d3HoursNeeded : '',
      error: ''
    }
  }

  onTextChange = (e) => {
    const { target: { name, value } } = e
    this.setState(() => ({ [name]: value }))
  }

  onAmountChange = (e) => {
    console.log(e);
    const { target: { name, value } } = e
    if (!value || value.match(/^\d{1,}?$/)) {
      this.setState(() => ({ [name]: value }))
    }
  }

  onSubmit = (e) => {
    e.preventDefault()
    if (!this.state.title || !this.state.daysNeeded) {
      this.setState(() => ({ error: 'Please provide title and days needed.' }))
    } else {
      this.setState(() => ({ error: '' }))
      this.props.onSubmit({
        title: this.state.title,
        description: this.state.description,
        skills: this.state.skills,
        daysNeeded: parseInt(this.state.daysNeeded, 10),
        hoursNeeded: parseInt(this.state.hoursNeeded, 10),
        d1Description: this.state.d1Description,
        d1HoursNeeded: parseInt(this.state.d1HoursNeeded),
        d2Description: this.state.d2Description,
        d2HoursNeeded: parseInt(this.state.d2HoursNeeded),
        d3Description: this.state.d3Description,
        d3HoursNeeded: parseInt(this.state.d3HoursNeeded)
      })
    }
  }

  render() {
    return (
      <div className="gigform">
        <div className="gigform__menu">
          <button>← back</button>
        </div>        
        <form onSubmit={this.onSubmit}>
          <div className="gigform__header">
            <div className="gigform__header--firstrow">
              <div className="gigform__header--left">
                <div className="gigform__header--upload">
                  <div className="gigform__header--upload-label">Upload Banner</div>
                </div>
              </div>
              <div className="gigform__header--right">
                <div>
                  <label>
                    Title
                  </label>
                    <input
                      name="title"
                      type="text"
                      placeholder="Title for the package"
                      autoFocus
                      value={this.state.title}
                      onChange={this.onTextChange}
                    />
                </div>
                <div>
                  <label>
                    Detailed Description
                  </label>
                  <textarea
                    name="description"
                    rows="5"
                    placeholder="Detailed description about the package"
                    value={this.state.description}
                    onChange={this.onTextChange}
                  >
                  </textarea>
                </div>
              </div>
            </div>
            <div className="gigform__header--secondrow">
              <div className="gigform__header--left">
                <div>
                  <label>Categories / Skills</label>
                  <input
                    name="skills"
                    type="text"
                    placeholder="Type"
                    value={this.state.skills}
                    onChange={this.onTextChange}
                  />
                </div>
              </div>
              <div className="gigform__header--right">
                <div className="gigform__half">
                  <label>
                    Days will be needed
                  </label>
                  <RectSpinnerInput name="daysNeeded" 
                    value={this.state.daysNeeded}
                    placeholder="Days" onChange={this.onAmountChange}/>
                </div>
                <div className="gigform__half">
                  <label>
                    Total Hours for Package
                  </label>
                  <RectSpinnerInput name="hoursNeeded" 
                    value={this.state.hoursNeeded}
                    placeholder="Hours" onChange={this.onAmountChange}/>
                </div>
              </div>
            </div>         
          </div>
          <div className="gigform__day-card-list">
            {this.state.daysNeeded >= 1 &&
              <div className="gigform__day-card">
                <div className="gigform__day-card-head">Day 1</div>
                <div className="gigform__day-card-body">
                  <label>
                    Syllabus Description
                  </label>
                  <textarea
                    rows="4"
                    name="d1Description"
                    placeholder="Detailed description about day 1"
                    value={this.state.d1Description}
                    onChange={this.onTextChange}
                  >
                  </textarea>
                  <label>
                    Total Hours for Package
                  </label>                
                  <CircleSpinnerInput name="d1HoursNeeded" 
                      value={this.state.d1HoursNeeded}
                      placeholder="Hours" onChange={this.onAmountChange}/>                    
                  </div>
              </div>
            }
            {this.state.daysNeeded > 1 &&
              <div className="gigform__day-card">
              <div className="gigform__day-card-head">Day 2</div>
              <div className="gigform__day-card-body">
                <label>
                  Syllabus Description
                </label>
                <textarea
                  rows="4"
                  name="d2Description"
                  placeholder="Detailed description about day 2"
                  value={this.state.d2Description}
                  onChange={this.onTextChange}
                >
                </textarea>
                <label>
                  Total Hours for Package
                </label>                
                <CircleSpinnerInput name="d2HoursNeeded" 
                    value={this.state.d2HoursNeeded}
                    placeholder="Hours" onChange={this.onAmountChange}/>                    
                </div>
            </div>
            }
            {this.state.daysNeeded > 2 &&
              <div className="gigform__day-card">
                <div className="gigform__day-card-head">Day 3</div>
                <div className="gigform__day-card-body">
                  <label>
                    Syllabus Description
                  </label>
                  <textarea
                    rows="4"
                    name="d3Description"
                    placeholder="Detailed description about day 3"
                    value={this.state.d3Description}
                    onChange={this.onTextChange}
                  >
                  </textarea>
                  <label>
                    Total Hours for Package
                  </label>                
                  <CircleSpinnerInput name="d3HoursNeeded" 
                      value={this.state.d3HoursNeeded}
                      placeholder="Hours" onChange={this.onAmountChange}/>                    
                  </div>
              </div>
            }
          </div>
          {this.state.error && <p className="gigform_error">{this.state.error}</p>}
          <div className="gigform__footer">
            <button className="gigform__submit">{this.props.btnText}</button>
          </div>
        </form>
      </div>
    )
  }
}