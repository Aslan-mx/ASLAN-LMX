import React,{Fragment} from 'react';
import First from '../../Common/First/First.js';
import Second from '../../Common/Second/Second.js';
import Third from '../../Common/Third/Third.js';
import Fourth from '../../Common/Fourth/Fourth.js';
import Fifth from '../../Common/Fifth/Fifth.js';
import Sixth from '../../Common/Sixth/Sixth.js';
import { Anchor } from 'antd';
import { TeamOutlined,PicCenterOutlined,BarcodeOutlined,AppstoreAddOutlined,MailOutlined,MergeCellsOutlined,DownloadOutlined, FacebookFilled,GithubFilled,WindowsFilled,WeiboCircleFilled,Html5Filled,GitlabFilled} from '@ant-design/icons';
import {Body,Music,HeaderWrapper,Main,NavItem,Nav,SubNav,Portrait} from '../../style/last.js';
import 'antd/dist/antd.css';
import {Player} from 'video-react';
const { Link } = Anchor;

class Last extends React.Component{
  render(){
    return (
      <Fragment>
        <Body>
        <div id="background" className="wall"></div>
        <div id="midground" className="wall"></div>
        <div id="foreground" className="wall"></div>
        <div id="top" className="wall"></div>
        <HeaderWrapper>
          <Nav>
            <NavItem>
              <Anchor affix={false} style={{paddingLeft:0}}>
                <li>
                  <Link  href="#first"  title=""/>
                  <a href="#first">
                    <TeamOutlined style={{ fontSize: '50px', color: '#2e2e2e' }}/>
                  </a>
                </li>
                <li>
                  <Link href="#second" title="" />
                  <a href="#second">
                    <PicCenterOutlined style={{ fontSize: '50px', color: '#2e2e2e' }}/>
                  </a>
                </li>
                <li>
                  <Link href="#third" title="" />
                  <a href="#third">
                    <BarcodeOutlined style={{ fontSize: '50px', color: '#2e2e2e' }}/>
                  </a>
                </li>
                <li>
                  <Link href="#fourth" title="" />
                  <a href="#fourth">
                    <AppstoreAddOutlined style={{ fontSize: '50px', color: '#2e2e2e' }}/>
                  </a>
                </li>
                <li>
                  <Link href="#fifth" title="" />
                  <a href="#fifth">
                    <MailOutlined style={{ fontSize: '50px', color: '#2e2e2e' }}/>
                  </a>
                </li>
                <li>
                  <Link href="#sixth" title="" />
                  <a href="#sixth">
                    <MergeCellsOutlined style={{ fontSize: '50px', color: '#2e2e2e' ,marginTop:'150px'}}/>
                  </a>
                </li>
                <li>
                  <Link href="#seventh" title="" />

                  <a href={require('../李明轩个人简历.docx')} download={'李明轩个人简历.docx'}>
                    <DownloadOutlined style={{ fontSize: '50px', color: '#2e2e2e' }}/>
                  </a>
                </li>
              </Anchor>
            </NavItem>
            <SubNav>
              <Portrait>
                <li>
                  <img className={'pic'} src="https://cdn.img.wenhairu.com/images/2020/08/04/wfdkT.jpg" alt=""/>
                  <div id="container">
                    <p>
                      <a href="https://www.baidu.com/">李明轩</a>
                    </p>
                  </div>
                  <span>所在地：浙江省 杭州市</span>
                  <p>热爱生活、喜欢旅游、喜欢画画、喜爱阅读、对未来充满无限期望···</p>
                  <h2>我的社交</h2>
                  <a href="https://www.facebook.com/profile.php?id=100039100906539">
                    <FacebookFilled style={{ fontSize: '36px' }}/>
                  </a>
                  <a href="https://github.com/Aslan-mx">
                    <GithubFilled style={{ fontSize: '36px' }}/>
                  </a>
                  <a href="https://www.microsoft.com/zh-cn/">
                    <WindowsFilled style={{ fontSize: '36px' }}/>
                  </a>
                  <a href="https://weibo.com/u/7401214029?from=myfollow_all">
                    <WeiboCircleFilled style={{ fontSize: '36px' }}/>
                  </a>
                  <a href="https://weibo.com/WAN9510210827/home?wvr=5&lf=reg">
                    <Html5Filled style={{ fontSize: '36px' }}/>
                  </a>
                  <a href="https://wx.qq.com">
                    <GitlabFilled style={{ fontSize: '36px' }}/>
                  </a>
                </li>
              </Portrait>
            </SubNav>
            <Main>
              <cite id={'first'}>
                <First></First>
              </cite>
              <cite id={'second'}>
                <Second></Second>
              </cite>
              <cite id={'third'}>
                <Third></Third>
              </cite>
              <cite id={'fourth'}>
                <Fourth></Fourth>
              </cite>
              <cite id={'fifth'}>
                <Fifth></Fifth>
              </cite>
              <cite id={'sixth'}>
                <Sixth></Sixth>
              </cite>
              <cite id={''}>

              </cite>
            </Main>
          </Nav>


        </HeaderWrapper>
        <Music>
          <Player className={'play'} autoPlay>
            <source src="http://m10.music.126.net/20200929015124/ec59b1b2e1c84ae7736f1b46979eefb3/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/3058733528/d211/190a/ff89/904c29d48bc432c2f6bf48a78d31bbd9.mp3" />
          </Player>
        </Music>
        </Body>
      </Fragment>
    )
  }

}
export default Last;
