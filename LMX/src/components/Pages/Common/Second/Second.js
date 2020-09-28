import React,{Fragment} from 'react';
import {Divider } from 'antd';
import { HeaderWrapper,Menu,Hot,They,New} from '../style/second.js';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux'
import {actionCreators }from './store';
class Second extends React.Component{
  render(){
    return(
      <Fragment>
        <HeaderWrapper>
          <div className="loader font2">
            <span>李</span>
            <span className="span2">明</span>
            <span className="span3">轩</span>
            <span className="span4">个</span>
            <span className="span5">人</span>
            <span className="span6">工</span>
            <span className="span7">作</span>
            <span className="span8">经</span>
            <span className="span9">及</span>
            <span className="span10">技</span>
            <span className="span11">能</span>
          </div>
          <h2>技能</h2>
          <br/>
          <Menu>
            <Hot>
              {/*{*/}
                {/*Fourth.map((item,index)=>{*/}
                  {/*return(*/}
                    {/*<Hot key={item.get('id')}>*/}
                      {/*<h3 className="progress-title">{item.get('title')}</h3>*/}
                      {/*<div className="progress">*/}
                        {/*<div className="progress-bar" style={{width:'{item.get(\'nice\')}',background:'{item.get("color")}'}}>*/}
                          {/*<div className='progress-value'>{item.get('nice')}</div>*/}
                        {/*</div>*/}
                      {/*</div>*/}
                    {/*</Hot>*/}
                  {/*)*/}
                {/*})*/}
              {/*}*/}

              <h3 className="progress-title">HTML5</h3>
              <div className="progress">
                <div className="progress-bar" style={{width:'85%', background:'#FF0000'}}>
                  <div className="progress-value">85%</div>
                </div>
              </div>

              <h3 className="progress-title">CSS</h3>
              <div className="progress">
                <div className="progress-bar" style={{width:'85%', background:'#FF00FF'}}>
                  <div className="progress-value">85%</div>
                </div>
              </div>

                <h3 className="progress-title">JavaScript</h3>
                <div className="progress">
                  <div className="progress-bar" style={{width:'70%', background:'#ffc304'}}>
                    <div className="progress-value">70%</div>
                  </div>
                </div>

              <h3 className="progress-title">Bootstrap</h3>
              <div className="progress">
                <div className="progress-bar" style={{width:'78%', background:'#2e9dc2'}}>
                  <div className="progress-value">78%</div>
                </div>
              </div>

              <h3 className="progress-title">JQuery</h3>
              <div className="progress">
                <div className="progress-bar" style={{width:'85%', background:'#FF7F00'}}>
                  <div className="progress-value">85%</div>
                </div>
              </div>

              <h3 className="progress-title">Adobe Photoshop</h3>
              <div className="progress">
                <div className="progress-bar" style={{width:'85%', background:'#9400D3'}}>
                  <div className="progress-value">85%</div>
                </div>
              </div>

              <h3 className="progress-title">Adobe After Effects</h3>
              <div className="progress">
                <div className="progress-bar" style={{width:'65%', background:'#FF1493'}}>
                  <div className="progress-value">65%</div>
                </div>
              </div>

              <h3 className="progress-title">Adobe Illustrator</h3>
              <div className="progress">
                <div className="progress-bar" style={{width:'60%', background:'#00FF00'}}>
                  <div className="progress-value">60%</div>
                </div>
              </div>

              <h3 className="progress-title"> Adobe Premiere</h3>
              <div className="progress">
                <div className="progress-bar" style={{width:'65%', background:'#0000EE'}}>
                  <div className="progress-value">65%</div>
                </div>
              </div>

              <h3 className="progress-title">Auto CAD</h3>
              <div className="progress">
                <div className="progress-bar" style={{width:'70%', background:'#00BFFF'}}>
                  <div className="progress-value">70%</div>
                </div>
              </div>
              <They>
                <ul>
                  <li  className="hex">
                    <span className="hexIn">
                      <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2501038336,352791808&fm=26&gp=0.jpg" alt=""/>
                    </span>
                  </li>
                  <li  className="hex">
                    <span className="hexIn">
                      <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3302866837,397222423&fm=26&gp=0.jpg" alt=""/>
                    </span>
                  </li>
                  <li  className="hex">
                    <span className="hexIn">
                      <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2715743858,3567218010&fm=26&gp=0.jpg" alt=""/>
                    </span>
                  </li>
                  <li  className="hex">
                    <span className="hexIn">
                      <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=354250524,185402733&fm=26&gp=0.jpg" alt=""/>
                    </span>
                  </li>
                  <li  className="hex">
                    <span className="hexIn">
                      <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1498150158,2214629704&fm=26&gp=0.jpg" alt=""/>
                    </span>
                  </li>
                  <li  className="hex">
                    <span className="hexIn">
                      <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598016785308&di=0e5f1954f1ee3950072c81892c81d084&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201709%2F30%2F20170930190027_HSyAn.thumb.700_0.jpeg" alt=""/>
                    </span>
                  </li>
                  <li  className="hex">
                    <span className="hexIn">
                      <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=107780519,3157564466&fm=15&gp=0.jpg" alt=""/>
                    </span>
                  </li>
                  <li  className="hex">
                    <span className="hexIn">
                      <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1272217648,4098371111&fm=26&gp=0.jpg" alt=""/>
                    </span>
                  </li>
                  <li  className="hex">
                    <span className="hexIn">
                      <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2075452321,1552766229&fm=26&gp=0.jpg" alt=""/>
                    </span>
                  </li>
                  <li  className="hex">
                    <span className="hexIn">
                      <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3158638931,953055714&fm=26&gp=0.jpg" alt=""/>
                    </span>
                  </li>
                  <li  className="hex">
                    <span className="hexIn">
                      <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3624754930,2024250371&fm=11&gp=0.jpg" alt=""/>
                    </span>
                  </li>
                  <li  className="hex">
                    <span className="hexIn">
                      <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3234741458,2801376147&fm=11&gp=0.jpg" alt=""/>
                    </span>
                  </li>
                  <li  className="hex">
                    <span className="hexIn">
                      <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1388893224,4008010748&fm=26&gp=0.jpg" alt=""/>
                    </span>
                  </li>
                  <li  className="hex">
                    <span className="hexIn">
                      <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4240013890,3867140599&fm=15&gp=0.jpg" alt=""/>
                    </span>
                  </li>
                  <li  className="hex">
                    <span className="hexIn">
                      <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2357078253,3314847703&fm=26&gp=0.jpg" alt=""/>
                    </span>
                  </li>
                  <li  className="hex">
                    <span className="hexIn">
                      <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1767053573,3554373355&fm=26&gp=0.jpg" alt=""/>
                    </span>
                  </li>
                  <li  className="hex">
                    <span className="hexIn">
                      <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1249501448,481825436&fm=26&gp=0.jpg" alt=""/>
                    </span>
                  </li>
                  </ul>
              </They>
            </Hot>
            <New>
              <Divider orientation="left"><h4>北京科清环保科技有限公司</h4></Divider>
              <p>负责公司小程序的迭代开发和推广</p>
              <br/>
              <span>项目介绍</span>
              <h5>兰州信利达建材有限公司 (微信小程序)</h5>
              <i>个人职责：应公司需求，互联网多元化的拓展公司业务，及相关业务模式的更新.</i>
              <span>应用技术</span>
              <p>Vue</p>
              <div className="container">
                <div className="skills wechat">85%</div>
              </div>

              <Divider orientation="left"><h4>北京科清环保科技有限公司</h4></Divider>
              <p>与UI协作，根据设计图，运用HTML+CSS编写静态页面</p>
              <p>运用JS，Jquery实现动态页面效果</p>
              <p>与后端联合，实现后端接口功能，获取动态数据</p>
              <p>对代码进行优化，并处理浏览器兼容问题等</p>
              <span>项目介绍</span>
              <h5>绿森商城 (移动端)</h5>
              <i>个人职责：负责项目首页和详情页的编写策划，与UI设计师产品经理等协作完成最优质的web项目；与后台工程师协作，完成各种数据交互，动态展示信息。</i>
              <br/>
              <span>应用技术</span>
              <p>Vue</p>
              <div className="container">
                <div className="skills vue">85%</div>
              </div>
              <p>Vue-Router</p>
              <div className="container">
                <div className="skills vue-router">80%</div>
              </div>
              <p>Vuex</p>
              <div className="container">
                <div className="skills vuex">87%</div>
              </div>
              <p>Mint Ui</p>
              <div className="container">
                <div className="skills ui">94%</div>
              </div>
                <h5>科清环保（PC端）</h5>
                <i>个人职责：负责页面的布局及效果的实现；负责数据交互并与后台接口，共同更新数据，修改 bug，后期维护。</i>
                <br/>
                <span>应用技术</span>
                <p>React</p>
                <div className="container">
                  <div className="skills react">92%</div>
                </div>
                <p>React-Router</p>
                <div className="container">
                  <div className="skills react-router">70%</div>
                </div>
                <p>Redux</p>
                <div className="container">
                  <div className="skills redux">80%</div>
                </div>
                <p>Styled-Components</p>
                <div className="container">
                  <div className="skills styled">97%</div>
                </div>
                <p>JavaScript</p>
                <div className="container">
                  <div className="skills js">70%</div>
                </div>
                <p>JQuery</p>
                <div className="container">
                  <div className="skills jquery">75%</div>
                </div>

              <Divider orientation="left"><h4>北京寺库商贸有限公司</h4></Divider>
              <p>负责产品的前端设计、开发</p>
              <p>为前端技术改进、网站性能优化、技术选型提供解决方案</p>
              <p>参与寺库网 PC 端、Web App，和商品管理系统的开发</p>
              <p>Web 前沿技术研究和新技术调研</p>
              <p>配合开发人员与 UI 设计师，对功能型页面程序提供与整合</p>
              <span>项目介绍</span>
              <h5>寺库网 (PC端)</h5>
              <i>个人职责：在该项目中负责负责首页和详情页的开发，配合后端完成各种数据交互，动态展示信息等</i>
              <br/>
              <span>应用技术</span>
              <p>React</p>
              <div className="container">
                <div className="skills react">90%</div>
              </div>
              <p>React-Router</p>
              <div className="container">
                <div className="skills react-router">70%</div>
              </div>
              <p>Redux</p>
              <div className="container">
                <div className="skills redux">80%</div>
              </div>
              <p>Styled-Components</p>
              <div className="container">
                <div className="skills styled">97%</div>
              </div>
              <p>React-Transition-Group</p>
              <div className="container">
                <div className="skills group">55%</div>
              </div>
              <h5>寺库网 (App)</h5>
              <i>个人职责：该项目中负责更新布局、迭代开发。</i>
              <br/>
              <span>应用技术</span>
              <p>VUE</p>
              <div className="container">
                <div className="skills vue">85%</div>
              </div>
              <p>VUE-Router</p>
              <div className="container">
                <div className="skills vue-router">80%</div>
              </div>
              <p>VUEX</p>
              <div className="container">
                <div className="skills vuex">87%</div>
              </div>
              <p>Flex</p>
              <div className="container">
                <div className="skills flex">65%</div>
              </div>
              <h5>寺库商品管理系统</h5>
              <i>个人职责：该项目中负责小部分用户对用户进行集中管理、及相关模块的部分开发。</i>
              <br/>
              <span>应用技术</span>
              <p>React</p>
              <div className="container">
                <div className="skills react">92%</div>
              </div>
              <p>React-Router</p>
              <div className="container">
                <div className="skills react-router">70%</div>
              </div>
              <p>Redux</p>
              <div className="container">
                <div className="skills redux">80%</div>
              </div>
              <p>Styled-Components</p>
              <div className="container">
                <div className="skills styled">97%</div>
              </div>
              <p>React-Transition-Group</p>
              <div className="container">
                <div className="skills group">55%</div>
              </div>
              <p>Ant Design</p>
              <div className="container">
                <div className="skills design">65%</div>
              </div>
            </New>
          </Menu>
        </HeaderWrapper>
      </Fragment>
    )
  }
  componentDidMount(){
    this.props.changeSecondData();
  }
}
const mapState=(state)=>({

})
const mapDispatch=(dispatch)=>({
  changeSecondData (){
    const action=actionCreators.getSecond();
    dispatch(action)
  }
})

export default connect(mapState,mapDispatch)(Second);