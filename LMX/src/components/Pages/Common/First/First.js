import React,{Fragment} from 'react';
import {HeaderWrapper,Frames,Column,Apse} from '../style/first.js'
import { CrownTwoTone } from '@ant-design/icons';
import { Carousel,Collapse } from 'antd';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import {actionCreators }from './store';


const { Panel } = Collapse;
function callback(key) {
}

class First extends React.Component{
  render(){
    return (
      <Fragment>
        <HeaderWrapper>
          <div className="loader font1">
            <span>李</span>
            <span className="span2">明</span>
            <span className="span3">轩</span>
            <span className="span4">个</span>
            <span className="span5">人</span>
            <span className="span6">简</span>
            <span className="span7">历</span>
          </div>
          <h2>李明轩</h2>
          <Frames>
            <div className={'Frames-Item'}>
              <li>
                <i>
                  <CrownTwoTone twoToneColor="#eb2f96" />
                </i>
                <label  htmlFor="">个人姓名:</label>
                  <b>李明轩</b>
              </li>
              <li>
                <i>
                  <CrownTwoTone twoToneColor="#eb2f96" />
                </i>
                <label  htmlFor="">求职岗位:</label>
                <b>Web前端开发工程师</b>
              </li>
              <li>
                <i>
                  <CrownTwoTone twoToneColor="#eb2f96" />
                </i>
                <label  htmlFor="">工作地点:</label>
                <b>浙江·杭州</b>
              </li>
              <li>
                <i>
                  <CrownTwoTone twoToneColor="#eb2f96" />
                </i>
                <label  htmlFor="">我的邮箱:</label>
                <b>aslan_lmx@outlook.com</b>
              </li>
              <li>
                <i>
                  <CrownTwoTone twoToneColor="#eb2f96" />
                </i>
                <label  htmlFor="">手机号码:</label>
                <b>(+86)136-0114-4417</b>
              </li>
              <li>
                <i>
                  <CrownTwoTone twoToneColor="#eb2f96" />
                </i>
                <label  htmlFor="">我的网站:</label>
                  <a href="slan-mx.top/first">
                   <b>www.aslan-mx.top/first</b>
                  </a>
              </li>

            </div>
            <div className={'Frames-Pic'}>
              <Carousel autoplay>
                <li>
                  <img src="http://cdn.img.wenhairu.com/images/2020/08/21/w4tws.jpg" align="middle" alt="正在加载图片"/>
                </li>
                <li>
                  <img src="http://cdn.img.wenhairu.com/images/2020/08/21/w43rC.jpg" align="middle" alt="正在加载图片"/>
                </li>
                <li>
                  <img src="http://cdn.img.wenhairu.com/images/2020/08/21/w4zRR.jpg" align="middle" alt="正在加载图片"/>
                </li>
              </Carousel>
            </div>
            <br/>
            <br/>
            <br/>
          </Frames>
          <br/>
          <div className="loader font2">
            <span>李</span>
            <span className="span2">明</span>
            <span className="span3">轩</span>
            <span className="span4">个</span>
            <span className="span5">人</span>
            <span className="span6">经</span>
            <span className="span7">历</span>
          </div>
          <Column>
            <div className="case-content">

              <div className="case-item" >
                <div className="ih-item circle effect1">
                  <a href="http://aslan-mx.top/first">
                    <div className="spinner"></div>
                    <div className="img">
                      <img src="//inews.gtimg.com/newsapp_match/0/4997803215/0" alt="正在加载中"/>
                    </div>
                    <div className="info">
                      <div className="info-back">
                        <h3>简历</h3>
                        <p>温饱·理想·能力</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="case-item" >
                <div className="ih-item circle effect1">
                  <a href="http://aslan-mx.top/second">
                    <div className="spinner"></div>
                    <div className="img">
                      <img src="//inews.gtimg.com/newsapp_match/0/9343634784/0" alt="正在加载中"/>
                    </div>
                    <div className="info">
                      <div className="info-back">
                        <h3>知识点</h3>
                        <p>知识·智慧·阅读</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="case-item" >
                <div className="ih-item circle effect1">
                  <a href="http://aslan-mx.top/third">
                    <div className="spinner"></div>
                    <div className="img">
                      <img src="//inews.gtimg.com/newsapp_match/0/11315116727/0" alt="正在加载中"/>
                    </div>
                    <div className="info">
                      <div className="info-back">
                        <h3>旅行</h3>
                        <p>美食·旅游·分享</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

            </div>
          </Column>
          <Apse>
            <Collapse defaultActiveKey={['1']} onChange={callback}>
              <Panel header="兴趣爱好">
                <p>运动类：篮球、羽毛球、兵乓球、足球、滑板、滑旱冰、跑步、跳绳、举重……</p>
                <br/>
                <p>娱乐类：听音乐、看电影、绘画、写小说、看书……</p>
                <br/>
                <p>冒险类：做弹弓玩、做木剑玩、做橡皮枪玩……</p>
                <br/>
                <p>智力类：拼图、拆装（拆小汽车、闹钟、电风扇之类的）……</p>
                <br/>
                <p>收藏类：收藏扑克牌、小汽车、手表、鞋之类的……</p>
                <br/>
                <p>文艺类：折纸（可以尝试无限种折纸飞机的办法）、剪纸、品茶、涂鸦……</p>
              </Panel>
              <Panel header="旅行日志">
                <p>西北大环线：西宁-门源青石嘴-张掖-酒泉-嘉峪关-瓜州-敦煌-阿克赛-青海雅丹-大柴旦-德令哈-茶卡盐湖-塔尔寺</p>
                <br/>
                <p>湖南：长沙 > 韶山 > 衡山 > 郴州 > 资兴 > 岳阳 > 常德 > 桃源 > 武陵源区 > 张家界 > 武陵源区 > 慈利 > 永顺 > 湘西 > 吉首</p>
                <br/>
                <p>……</p>
                <br/>
                <p>……</p>
                <br/>
              </Panel>
            </Collapse>
          </Apse>
        </HeaderWrapper>
      </Fragment>
    )
  }
  componentDidMount(){
    this.props.changeFirstData();
  }
}

const mapState =(state)=>({

})

const mapDispatch =(dispatch)=>({
  changeFirstData(){
    const action=actionCreators.getFirst();
    dispatch(action)
  }
})
export default connect(mapState,mapDispatch)(First);