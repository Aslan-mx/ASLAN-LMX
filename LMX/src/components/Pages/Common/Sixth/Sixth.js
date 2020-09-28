import React,{Fragment} from 'react'
import {  Button,Input } from 'antd';
import {HeaderWrapper,Chat} from '../style/sixth.js';


class Sixth extends React.Component{
  constructor(props) {
    super(props)
    //绑定函数
    this.handleTextareaChange = this.handleTextareaChange.bind(this);
    //状态值
    this.state = {
      textareaValue:''
    }
  }
  handleTextareaChange(e){
    this.setState({
      textareaValue:e.target.value
    })
  }
  render(){
    return(
      <Fragment>
        <HeaderWrapper>
          <div className="loader font2">
            <span>李</span>
            <span className="span2">明</span>
            <span className="span3">轩</span>
            <span className="span4">私</span>
            <span className="span5">人</span>
            <span className="span6">聊</span>
            <span className="span7">天</span>
            <span className="span8">室</span>
          </div>
          <h2>暗河</h2>
          <br/>
          <Chat>
            <textarea  id={'msgText'}  onChange={this.handleTextareaChange}/>
            <br/>
            <Input id={'names'} placeholder="请输入昵称:"/>
            <input id={'msgs'} placeholder="请输入聊天内容" style={{ outlineColor:'#00ff00'}} />
            <Button id={'bn'} type="primary" danger>发送</Button>
          </Chat>
          <br/>
          <ul className={'clearfix'}>
            <li>
              <a href='http://aslan-mx.top/chatroom.html' className="btn btn9"><span className="btn-inner">进入聊天室</span>
                <div className="bgsqr1"></div>
                <div className="bgsqr2"></div>
                <div className="bgsqr3"></div>
                <div className="bgsqr4"></div>
              </a>
            </li>
          </ul>
        </HeaderWrapper>
      </Fragment>
    )
  }
  componentDidMount(){
    var msgText=document.getElementById("msgText");
    var names=document.getElementById("names");
    var msgs=document.getElementById("msgs");
    var bn=document.getElementById("bn");

    bn.addEventListener("click",clickHandler);
    document.addEventListener("keydown",keydownHandler);
    setInterval(ajax,16);
    function keydownHandler(e) {
      if(e.keyCode===13){
        clickHandler();
      }
    }
    function clickHandler(e) {
      if(msgs.value.trim().length===0)return;
      if(names.value.trim().length===0)return;
      var obj={type:0,user:names.value,msg:msgs.value};
      ajax(obj);
      msgs.value="";
    }
    function ajax(obj) {
      if(!obj){
        obj={type:1};
      }
      var xhr=new XMLHttpRequest();
      xhr.addEventListener("load",loadHandler);
      xhr.open("POST","http://172.29.219.40:3000");
      xhr.send(encodeURIComponent(JSON.stringify(obj)));
    }
    function  loadHandler(e) {
      msgText.value = JSON.parse(decodeURIComponent(this.response)).result.join("\n");
      msgText.scrollTop = msgText.scrollHeight;//聊天消息滚动条随增加而滚动
    }
  }
}
export default Sixth;