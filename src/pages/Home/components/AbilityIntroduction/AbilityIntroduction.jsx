import { Component } from 'react';
import { Grid } from '@icedesign/base';

const { Row, Col } = Grid;

const abilities = [
  {
    icon: 'https://gw.alicdn.com/tfs/TB1BY1osGmWBuNjy1XaXXXCbXXa-320-316.png',
    title: '社交',
    content: '留下你的生日和留言，让别人找到同日生的你！',
    link: 'https://www.zhihu.com/question/31153364',
  },
  {
    icon: 'https://gw.alicdn.com/tfs/TB1AY1osGmWBuNjy1XaXXXCbXXa-320-316.png',
    title: '愿望',
    content: '许下生日愿望，与有缘人一起过生日',
    link: '/#/Create/',
  },
  {
    icon: 'https://gw.alicdn.com/tfs/TB1uzsTsv9TBuNjy0FcXXbeiFXa-320-316.png',
    title: '历史',
    content: '在星链缘上查看生日那天的历史大事',
    link: '/',
  },
  {
    icon: 'https://gw.alicdn.com/tfs/TB1BY1osGmWBuNjy1XaXXXCbXXa-320-316.png',
    title: '安全',
    content: '基于星云智能合约，永不丢失，不可篡改！',
    link: 'https://nebulas.io/',
  },
];

export default class AbilityIntroduction extends Component {
  renderAblities(abilities) {
    return abilities.map(({ icon, title, content, link }, idx) => {
      return (
        <Col xxs="24" l="6" style={styles.item} key={idx}>
          <img src={icon} style={{ width: '160px', height: '160px' }} />
          <div style={{ fontSize: '24px', color: '#333', marginBottom: '6px' }}>
            {title}
          </div>
          <div
            style={{
              width: '182px',
              fontSize: '16px',
              color: '#6D7A82',
              marginBottom: '30px',
              lineHeight: '1.7em',
            }}
          >
            {content}
          </div>
          <a href={link} style={{ color: '#00B0CF', fontSize: '16px' }}>
            了解更多
            <div
              style={{
                background: '#00B0CF',
                width: '26px',
                height: '26px',
                borderRadius: '13px',
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: '10px',
              }}
            >
              <div
                style={{
                  display: 'inline-block',
                  marginLeft: '-3.53553px', // -10 * sqrt(2) / 4
                  width: '10px',
                  height: '10px',
                  borderRight: '1px solid #fff',
                  borderBottom: '1px solid #fff',
                  transform: 'rotate(-45deg)',
                }}
              />
            </div>
          </a>
        </Col>
      );
    });
  }
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.title}>我们的特色</div>
        <div style={styles.subtitle}>&lt; Distinguishing Feature &gt;</div>
        <Row wrap style={styles.group}>
          {this.renderAblities(abilities)}
        </Row>
      </div>
    );
  }
}

const styles = {
  container: {
    background: '#fafafa',
    padding: '0px 70px 50px',
    textAlign: 'center',
  },
  title: {
    color: '#333',
    fontSize: '48px',
    whiteSpace: 'nowrap',
    marginBottom: '10px',
  },
  group: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '40px',
  },
  item: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
  },
};
