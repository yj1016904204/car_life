import React, { Component } from 'react'
import modelsDetail from '../models/detail'

import { Flex, WhiteSpace, Tag, Button, Tabs } from 'antd-mobile';

const PlaceHolder = ({ className = '', ...restProps }) => (
  <div className={`${className} placeholder`} {...restProps}>Block</div>
);

export default class Detail extends Component {
  state = {
    detailList: {},
    isLoad: false,
    tabs: [],
    showListValue: []
  }
  componentDidMount() {
    const { SerialID, tabs } = this.props.match.params
    let cityId = "201"
    if (SerialID) {
      modelsDetail.getDetailList(SerialID, cityId).then(res => {
        if (res.code === 1) {
          this.setState({ detailList: res.data }, () => {
            this.setState({ isLoad: true })
            let arrYear = new Set()
            res.data.list.map(item => {
              arrYear.add(item.market_attribute.year)
            })
            arrYear = Array.from(arrYear).map(item => ({ title: item }))
            arrYear.unshift({ title: "全部" })
            this.setState({ tabs: arrYear, showListValue: res.data.list })
          })
        } else {
          this.props.history.push("/home")
        }
      })
    } else {
      this.props.history.push("/home")
    }
  }
  listShow = (value) => {
    const { detailList } = this.state
    if (value.title === "全部") {
      this.setState({ showListValue: detailList.list })
    } else {
      const year = value.title
      let showListValue = detailList.list.filter(item => item.market_attribute.year === year)
      this.setState({ showListValue })
    }
  }
  render() {
    const { detailList, isLoad, tabs, showListValue } = this.state
    console.log(detailList);
    return isLoad ? (
      <div className="flex-container">
        <div className="img-title">
          <img src={detailList.CoverPhoto.replace('{0}', '3')} width="100%" />
          <Tag className="img-tag">{detailList.pic_group_count}张照片</Tag>
        </div>
        <Flex className="price">
          <Flex.Item><div style={{ fontSize: " 16px", color: "rgb(255, 38, 38)" }}>{detailList.market_attribute.dealer_price}</div><span style={{ color: "#999" }}>指导价 {detailList.market_attribute.official_refer_price}</span></Flex.Item>
          <Flex.Item><Button type="primary" size="small">{detailList.BottomEntranceTitle}</Button></Flex.Item>
        </Flex>
        <WhiteSpace size="sm" />

        <Flex>
          <Flex.Item>
            <div>
              <Tabs tabs={tabs} initialPage={0} animated={false} useOnPan={false} onChange={this.listShow}>
                {
                  tabs.map((item, index) => {
                    return (
                      <div style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }} key={index}>
                        {
                          showListValue.map(item1 => {
                            return (
                              <div key={item1.car_id}>
                                <WhiteSpace size="lg" />
                                <p>{item1.market_attribute.year}款 {item1.car_name}</p>
                                <p><span>指导价 {item1.market_attribute.official_refer_price} </span><span>{item1.market_attribute.dealer_price_min ? item1.market_attribute.dealer_price_min + "起" : item1.market_attribute.dealer_price}</span></p>
                                <Button type="primary" size="small" style={{ width: "100px" }}>询问底价</Button>
                              </div>
                            )
                          })
                        }
                      </div>
                    )
                  })
                }
              </Tabs>
            </div>
          </Flex.Item>
        </Flex>

      </div>
    ) : <div />
  }
}
