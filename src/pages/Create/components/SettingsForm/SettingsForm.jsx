/* eslint  react/no-string-refs: 0 */
import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Input, Button, Radio, Switch, Upload, Grid, DatePicker, Select, Feedback } from '@icedesign/base';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import './SettingsForm.scss';
import NebUtils from '../../../../util/NebUtils.js'
import moment from 'moment';
import { Base64 } from 'js-base64';


const Toast = Feedback.toast;
const { Row, Col } = Grid;
const { Group: RadioGroup } = Radio;
const { ImageUpload } = Upload;


const selectDataSource = [
  {label:'男', value:'man'},
  {label:'女', value:'woman'},
  {label:'其他', disabled:true}
];


export default class SettingsForm extends Component {
  static displayName = 'SettingsForm';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: {
        gender: '',
        birth: '',
        comment: '',
      },
    };
  }

  formChange = (value) => {
    this.setState({
      value,
    });
  };

  validateAllFormField = () => {
    this.refs.form.validateAll((errors, values) => {
      console.log('errors', errors, 'values', values);
      if (errors) {
        return;
      }
      if (!NebUtils.checkInstalledPlugin()) {
        Toast.error('还未安装Chrome扩展，请点击页面上方的下载按钮');
      }

      const birth = moment(values.birth).format('YYYYMMDD');
      const contract = {
        function: 'post',
        args: `["${birth}", "${values.gender}", "${Base64.encode(values.comment)}"]`,
      };
      NebUtils.pluginCall(contract.function, contract.args, (txHash) => {
        Toast.success("已提交交易，交易成功即提交您的信息到星链缘成功！")
      });
    });
  };

  render() {
    return (
      <div className="settings-form">
        <IceContainer>
          <IceFormBinderWrapper
            value={this.state.value}
            onChange={this.formChange}
            ref="form"
          >
            <div style={styles.formContent}>
              <h2 style={styles.formTitle}>提交到星链缘</h2>

              <Row style={styles.formItem}>
                <Col xxs="6" s="3" l="3" style={styles.label}>
                  性别：
                </Col>
                <Col s="12" l="10">
                  <IceFormBinder name="gender" required max={10} message="必填">
                    <Select dataSource={selectDataSource}/>
                  </IceFormBinder>
                  <IceFormError name="gender" />
                </Col>
              </Row>

              <Row style={styles.formItem}>
                <Col xxs="6" s="3" l="3" style={styles.label}>
                  生日：
                </Col>
                <Col s="12" l="10">
                  <IceFormBinder name="birth">
                    <DatePicker />
                  </IceFormBinder>
                  <IceFormError name="birth" />
                </Col>
              </Row>

              <Row style={styles.formItem}>
                <Col xxs="6" s="3" l="3" style={styles.label}>
                  想说的话：
                </Col>
                <Col s="12" l="10">
                  <IceFormBinder name="comment">
                    <Input size="large" multiple placeholder="请输入想说的话：生日、祝福、许愿、留言..." rows={8} />
                  </IceFormBinder>
                  <IceFormError name="comment" />
                </Col>
              </Row>
            </div>
          </IceFormBinderWrapper>

          <Row style={{ marginTop: 20 }}>
            <Col offset="3">
              <Button
                size="large"
                type="primary"
                style={{ width: 100 }}
                onClick={this.validateAllFormField}
              >
                提 交
              </Button>
            </Col>
          </Row>
        </IceContainer>
      </div>
    );
  }
}

const styles = {
  label: {
    textAlign: 'right',
  },
  formContent: {
    width: '100%',
    position: 'relative',
  },
  formItem: {
    alignItems: 'center',
    marginBottom: 25,
  },
  formTitle: {
    margin: '0 0 20px',
    paddingBottom: '10px',
    borderBottom: '1px solid #eee',
  },
};
