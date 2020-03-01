import React, { Component, Fragment } from 'react'
import { Input, Button, message } from 'antd'
import './Admin.scss'


class Admin extends Component{

  state={
    valueInput:'',
    password:'12345',
    truePassword: false,
    veiw:'Request'
  }

  onChangeInput(e){
    console.log(e.target.value)
    this.setState({
      valueInput: e.target.value
    })
  }

  setPassword = () =>{
    if(this.state.valueInput === this.state.password){
      this.setState({
        truePassword: true
      })
      message.success('Пароль правельный!',0.3)
    }else{message.error('Пароль не правельный!',0.3)}
  }

  updateView(view2){
    console.log(view2)
    this.setState({
      veiw: view2
    })
    console.log(this.state.veiw)
  }

  render(){

    const { truePassword, veiw } = this.state
    return(
      <Fragment>
        {!truePassword ?<div className='Main-container-Admin'>
          <div className='Password'>
            <span>Введите пароль:</span>
            <Input type='password' onChange={(e) => this.onChangeInput(e)} />
            <Button type='ghost' onClick={this.setPassword}>Ok</Button>
          </div>
        </div>
        : <div className='main-container-trueAdmin'>
            <header>
              <nav>
                <Button type='link' onClick={()=>this.updateView('Request')}>Request</Button>
                <Button type='link' onClick={()=>this.updateView('Reviews')}>Reviews</Button>
              </nav>
            </header>
            <div style={{display:veiw === 'Request' ? 'block':'none'}}>
              <div className='Request'>

              </div>
            </div>
            <div style={{display:veiw === 'Reviews' ? 'block':'none'}}>
              <div className='Reviews'>

              </div>
            </div>
          </div>

        }
      </Fragment>
    )
  }
}

export default Admin