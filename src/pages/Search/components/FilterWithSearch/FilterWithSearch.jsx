import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Search, Grid } from '@icedesign/base';
import './FilterWithSearch.scss';
import moment from 'moment';
import { DatePicker, Input, Select, Button  } from "@icedesign/base";

const { MonthPicker, YearPicker, RangePicker } = DatePicker;
const { Row, Col } = Grid;

const dataSource = [
  {label:'option1', value:'option1'},
  {label:'option2', value:'option2'},
  {label:'disabled', disabled:true}
];

export default class FilterWithSearch extends Component {
  static displayName = 'FilterWithSearch';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      inputDate: null,
      inputAddr: null,
    };
  }

  onSearchDate() {
    if (this.state.inputDate) {
      const str = moment(this.state.inputDate).format("YYYYMMDD");
      console.log(str);
    }
  }

  onSearchAddr() {
    if (this.state.inputAddr) {
      const str = this.state.inputAddr;
      console.log(str);
    }
  }


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
              <DatePicker onChange={(val, str) => {
                this.setState({
                  inputDate: val
                })
              }} />
              &nbsp;&nbsp;&nbsp;
              <Button type="primary" size="small" onClick={this.onSearchDate.bind(this)}>查找</Button>
            </Col>
          </Row>


          <Row style={styles.row}>
            <Col xxs="8" s="5" l="5" style={styles.formLabel}>
              查找情侣地址：
            </Col>
            <Col s="12" l="10">
              <Input placeholder="输入星云主网钱包地址" onChange={(val, str) => {
                this.setState({
                  inputAddr: val
                })
              }} />
              &nbsp;&nbsp;&nbsp;
              <Button type="primary" size="small" onClick={this.onSearchAddr.bind(this)}>查找</Button>
            </Col>
          </Row>

        </IceContainer>
      </div>
    );
  }
}

const styles = {
  row: {
    alignItems: 'center',
    paddingBottom: '10px',
  },
  filterContainer: {
    lineHeight: '32px',
  },
  filterItem: {
    height: '20px',
    padding: '0 20px',
    color: '#333',
    fontSize: '14px',
    cursor: 'pointer',
    borderRight: '1px solid #D8D8D8',
  },
  searchWrapper: {
    textAlign: 'right',
    margin: '10px 0',
  },
  formLabel: {
    textAlign: 'right',
    width: '100%',
  },
};
