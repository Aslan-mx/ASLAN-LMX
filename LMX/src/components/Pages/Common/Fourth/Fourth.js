import React,{Fragment} from 'react';
import 'antd/dist/antd.css';
import {HeaderWrapper,Content,Search,Nice} from '../style/fourth.js';
import {connect} from 'react-redux';
import { Carousel,Comment, Avatar, Form, Button, List, Input } from 'antd';
import moment from 'moment';
import {actionCreators }from './store';

const { TextArea } = Input;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : '评论'}`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        发送评论
      </Button>
    </Form.Item>
  </>
);


class Fourth extends React.Component{
  state = {
    comments: [],
    submitting: false,
    value: '',
  };

  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: '',
        comments: [
          {
            author: '阿拉斯轩',
            avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598269181793&di=07cf9da7af50268c95f164d0bc43c485&imgtype=0&src=http%3A%2F%2Fimg.bqatj.com%2Fimg%2Ff8a662163fda8edc.jpg',
            content: <p>{this.state.value}</p>,
            datetime: moment().fromNow(),
          },
          ...this.state.comments,
        ],
      });
    }, 1000);
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };
  render(){
    const { comments, submitting, value } = this.state;
    return(
      <Fragment>
        <HeaderWrapper>
          <div className="loader font2">
            <span>发</span>
            <span className="span2">消</span>
            <span className="span3">息</span>
            <span className="span4">给</span>
            <span className="span5">我</span>
            <span className="span6">吧</span>
          </div>
          <h2>李明轩</h2>
          <Nice>
            <Carousel autoplay>
              <li>
                <img src="https://cdn.img.wenhairu.com/images/2020/08/22/wOyNj.jpg" align="middle" alt=""/>
              </li>
              <li>
                <img src="https://cdn.img.wenhairu.com/images/2020/08/22/wOo9o.png" align="middle" alt=""/>
              </li>
              <li>
                <img src="https://cdn.img.wenhairu.com/images/2020/08/22/wOHyg.jpg" align="middle" alt=""/>
              </li>
              <li>
                <img src="https://cdn.img.wenhairu.com/images/2020/08/22/wOk63.jpg" align="middle" alt=""/>
              </li>
            </Carousel>
          </Nice>
          <Content>
            {comments.length > 0 && <CommentList comments={comments} />}
            <Comment
              avatar={
                <Avatar
                  src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1640946551,1722200871&fm=26&gp=0.jpg"
                  alt="Han Solo"
                />
              }
              content={
                <Editor
                  onChange={this.handleChange}
                  onSubmit={this.handleSubmit}
                  submitting={submitting}
                  value={value}
                />
              }
            />
          </Content>
          <Search>

          </Search>

        </HeaderWrapper>
      </Fragment>
    )
  }
  componentDidMount(){
    this.props.changeFourthData();
  }
}

const MapState=(state)=>({

})
const MapDispatch=(dispatch)=>({
  changeFourthData(){
    const action=actionCreators.getFourth();
    dispatch(action)
  }
})
export default connect(MapState,MapDispatch)(Fourth);