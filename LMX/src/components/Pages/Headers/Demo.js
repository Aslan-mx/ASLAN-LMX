import React,{ Fragment} from 'react';
import {HeaderWrapper} from '../style/demo.js';

class Demo extends React.Component {
  render() {
    return (
      <Fragment>
        <HeaderWrapper>
          <div className='content'>
            <div className='visible'>
              <ul>
                  <li>这里是我的心</li>
                  <li>天官赐福</li>
                  <li>奇迹般万物生长</li>
                  <li>百无禁忌</li>
                  <li>后来你来这里走一遭</li>
                  <li>佛祖拈花</li>
                  <li>这里荒芜寸草不生</li>
                  <li>一笑菩提</li>
                </ul>
              </div>
            </div>
        </HeaderWrapper>
      </Fragment>
    )
  }

}
export default Demo;