import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Search, Grid, Tab, Button, Icon } from '@icedesign/base';
import './FilterWithSearch.scss';
import moment from 'moment';
import { DatePicker, Input, Select, Feedback } from '@icedesign/base';
import NebUtils from '../../../../util/NebUtils.js';
import { Base64 } from 'js-base64';

const Toast = Feedback.toast;
const { Row, Col } = Grid;

export default class FilterWithSearch extends Component {
  static displayName = 'FilterWithSearch';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      inputDate: null,
      pageTitle: null,
      extLink: null,
      dataSource: [],
    };
  }

  componentDidMount() {
    this.doUpdateTable('19960717');
  }

  onSearchDate() {
    if (this.state.inputDate) {
      const str = moment(this.state.inputDate).format('YYYYMMDD');
      this.doUpdateTable(str);
    }
  }

  formatExtLink = (day) => {
    const str = moment(day, 'YYYYMMDD').format("M/D");
    return `http://www.todayonhistory.com/${str}/`
  };

  doUpdateTable = (day) => {
    const contract = {
      function: 'querySameDay',
      args: `[${day}]`,
    };
    Toast.success('查询中，请稍等...');
    NebUtils.userCallAxios(contract.function, contract.args, (item) => {
      console.log(item);
      this.setState({
        pageTitle: `星链缘人-${day}（${item.length}个）`,
        dataSource: item,
        extLink: this.formatExtLink(day),
      });
      Toast.success('获取数据成功！');
    });
  };

  renderItem = (item, idx) => {
    return (
      <div style={styles.item} key={idx}>
        <ul>
          <li style={styles.detailItem}>
            <div style={styles.detailTitle}>生日：</div>
            <div style={styles.detailBody}>{item.gender === 'man' ? '男' : '女'}</div>
          </li>
          <li style={styles.detailItem}>
            <div style={styles.detailTitle}>生日：</div>
            <div style={styles.detailBody}>{item.birthDate}</div>
          </li>
          <li style={styles.detailItem}>
            <div style={styles.detailTitle}>NAS地址：</div>
            <div style={styles.detailBody}>{item.from}</div>
          </li>
          <li style={styles.detailItem}>
            <div style={styles.detailTitle}>上传时间：</div>
            <div style={styles.detailBody}>{new Date(item.time).toLocaleString()}</div>
          </li>
          <li style={styles.detailItem}>
            <div style={styles.detailTitle}>想说的话：</div>
            <div style={styles.detailBody}>{Base64.decode(item.comment)}</div>
          </li>
        </ul>
      </div>
    );
  };

  renderResult = () => {
    if (this.state.pageTitle) {
      return (
        <IceContainer>
          <div>
            <h2 style={styles.title}>
              {this.state.pageTitle}
              &nbsp;&nbsp;
              <Button type="normal"
                      size="small"
                      component="a"
                      href={this.state.extLink}
                      target="_blank">
                历史上的今天<Icon type="skip"/>
              </Button>
            </h2>
            <div style={styles.noticeList}>
              {this.state.dataSource.length === 0 ? '' :
                this.state.dataSource.map((item, idx) => {
                  return this.renderItem(item, idx);
                })}
            </div>
          </div>
        </IceContainer>
      );
    }
  }
  ;

  render() {
    return (
      <div className="filter-with-search" style={styles.filterWithSearch}>
        <IceContainer
          className="filter-with-search-container"
          style={styles.filterWithSearchContainer}
        >

          <Row style={styles.row}>
            <Col xxs="8" s="5" l="5" style={styles.formLabel}>
              查找同年同月同日生：
            </Col>
            <Col s="12" l="10">
              <DatePicker
                defaultValue={'1996年07月17日'}
                formater={['YYYY年MM月DD日']}
                onChange={(val, str) => {
                  this.setState({
                    inputDate: val,
                  });
                }}/>
              &nbsp;&nbsp;&nbsp;
              <Button type="primary" size="small" onClick={this.onSearchDate.bind(this)}>查找</Button>
            </Col>
          </Row>
        </IceContainer>

        {this.renderResult()}
      </div>
    );
  }
}

const styles = {
  row: {
    alignItems: 'center',
    paddingBottom: '10px',
  },
  formLabel: {
    textAlign: 'right',
    width: '100%',
  },

  ///////////////////////////////

  item: {
    borderBottom: '3px solid #E5E5E5',
    padding: '15px 0',
  },
  title: {
    fontSize: '16px',
    fontWeight: '900',
    color: '#666',
  },
  date: {
    fontSize: '12px',
    color: '#666',
  },


  detailItem: {
    padding: '8px 0px',
    display: 'flex',
    borderTop: '1px solid #EEEFF3',
  },
  detailTitle: {
    marginRight: '30px',
    textAlign: 'right',
    width: '120px',
    color: '#999999',
  },
  detailBody: {
    flex: 1,
  },

};
