import React, { Component } from 'react'

import { Modal, Button } from 'antd'

import {
  WriteReview,
  HolidayOrder,
  ListReview,
  Footer,
  Header
} from '../../components'

import './Home.scss'

class Home extends Component{
  state = {
    modalVisible: false,
    name:'',
    telephon:'',
    email:'',
    date:'',
    time:'',
    holiday: '',
    countParticipant:'',
    dopInfo:''
  }

  vvod = (type, e) => {
    this.setState({
      [type]:e.target.value
    })
  }

  setModal1Visible(modal1Visible) {
    this.setState({ modal1Visible });
  }

  setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible });
  }


  render(){
    const {veiwModal} = this.state
    return(
      <div>
        <Header openPage={this.props.history.location.pathname}/>
        <div className='main-conteiner-Banner'>
          <div className='content-Banner'>
            <div className='header'>ВЕСЕЛЬЕ<br/> ГДЕ БЫ МЫ НЕ БЫЛИ</div>
            <div className='text'>С нами вы можете быть уверены,<br/>что ваше торжество пройдет безупречно</div>
            <div className='text'>Мы знаем как из этой жизни<br/>сделать праздник</div>
            <a onClick={() => this.setModal2Visible(true)}>Написать нам</a>
          </div>
        </div>
        <div className='main-conteiner-InfoBlock'>
          <div className='InfoBlock-left'>

            <div className='content'>
              <div style={{display: 'flex',justifyContent: 'center'}}>
                <div style={{maxWidth: '650px'}}>
                  <div className='info-logotype'>
                    <div className='logotype'>НАША КОМПАНИЯ</div>
                    <span><div style={{color:'rgb(238, 18, 18)',fontWeight:'700', fontSize:25+'px'}}>-ЭТО</div>ОПЫТНАЯ, ПЕРСПЕКТИВНАЯ ОРГАНИЗАЦИЯ,<br/>КОТОРАЯ ОКАЗВАЕТ УСЛУГИ КОМПЛЕКСНОГО<br/>ОБСЛУЖИВАНИЯ РАЗЛИЧНЫХ МЕРОПРИЯТИЙ<br/>И ПРАЗДНИКОВ</span>
                  </div>
                  <div className='main-info'>
                    <span>Наша компания является одним из лидеров на рынке<br/>индустрии.</span><br/>
                    <span style={{color:'rgb(238, 18, 18)',fontWeight:'700'}}>Почему выбирают именно нас?</span><br/>
                    Мы создаем события, о которых наши клиенты с гордостью рассказывают<br/>
                    своим друзьям и коллегам.<br/>
                    Мы стремимся креативно раскрыть и творчески подойти к<br/>
                    каждому событию.<br/>
                    У нас опыт проведения мероприятий, профессиональные<br/>
                    артисты и аниматьры.<br/>
                    Мы знаем как должен выглядеть настоящий праздник!<br/>
                  </div>
                </div>
              </div>
              
            </div>

          </div>
          <div className='InfoBlock-rigth'>
            <div className='InfoBlock-rigth-top'>
              <div className='info'>
                <span>ПОДБОР ЛУЧШЕГО МЕСТА ПРОВЕДЕНИЯ</span>
                <div>ПОДРОБНЕЕ</div>
              </div>
            </div>
            <div className='InfoBlock-rigth-center'>
              <div className='info'>
                <span>ПОДБОР ЛУЧШЕГО МЕСТА ПРОВЕДЕНИЯ</span>
                <div>ПОДРОБНЕЕ</div>
              </div>
            </div>
            <div className='InfoBlock-rigth-bottom'>
              <div className='info'>
                <span>ПОДБОР ЛУЧШЕГО МЕСТА ПРОВЕДЕНИЯ</span>
                <div>ПОДРОБНЕЕ</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* <HolidayOrder/> */}
        <WriteReview/>
        <ListReview/>
        <Footer/>

        <Modal
          style={{color:'white'}}
          title="ВЫБЕРИ УДОБОНОЕ ВРЕМЯ И МЕСТО ДЛЯ ПРОВЕДЕНИЯ ПРАЗДНИКА"
          centered
          visible={this.state.modal2Visible}
          onOk={() => this.setModal2Visible(false)}
          onCancel={() => this.setModal2Visible(false)}
          width='900px'
          footer
        >
          <div className='content-form'>
            <div>
              <div className='content-form-left'><span>Ваше имя</span><input type='text' onChange={(e) => this.vvod('name',e)} value={this.state.name}/></div>
              <div className='content-form-left'><span>Телефон</span><input type='text' onChange={(e) => this.vvod('telephon',e)} value={this.state.telephon}/></div>
              <div className='content-form-left'><span>E-Mail</span><input type='text' onChange={(e) => this.vvod('email',e)} value={this.state.email}/></div>
              <div className='content-form-left'><span>Дата заказа</span><input type='date' onChange={(e) => this.vvod('date',e)} value={this.state.date}/></div>
            </div>
            <div>
              <div className='content-form-rigth'><span>Удобное время</span><input type='datetime' onChange={(e) => this.vvod('time',e)} value={this.state.time}/></div>
              <div className='content-form-rigth'><span>Праздничное мероприятие</span><input type='text' onChange={(e) => this.vvod('holiday',e)} value={this.state.holiday}/></div>
              <div className='content-form-rigth'><span>Количество участников</span><input type='text' onChange={(e) => this.vvod('countParticipant',e)} value={this.state.countParticipant}/></div>
            </div>
          </div>
          <div className='content-form-bootom'>
            <div><span>Дополнительное пожелание</span></div>
            <textarea onChange={(e) => this.vvod('dopInfo',e)} value={this.state.dopInfo}/>
            <button>Отправить</button>
          </div>
        </Modal>

      </div>
    )
  }
}

export default Home