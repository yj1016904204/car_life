import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCarListAsycn, getCarFirstLetterAsycn } from '../store/action/carList'
import models from '../models'

import { Drawer, List } from 'antd-mobile';


export class Home extends Component {
  state = {
    open: false,
    carData: [],
  }
  onOpenChange = (MasterID) => {
    this.setState({ open: !this.state.open });
    models.getSerialList(MasterID).then(res => {
      if (res.code === 1) {
        this.setState({ carData: res.data })
      }
    })
  }
  getDetail = (SerialID) => {
    this.props.history.push("/detail/" + SerialID)
  }
  componentDidMount() {
    this.props.getCarListAsycn();
    this.props.getCarFirstLetterAsycn();
  }

  render() {
    const { carData } = this.state
    const { carList, carLetter } = this.props
    const sidebar = (<List style={{ position: 'fixed', top: 0, bottom: 0, zIndex: 10 }}> {carData.length > 0 ? carData.map((item, index) => {
      return (<List.Item key={index}>
        <div style={{ background: "#f4f4f4", fontSize: "12px", lineHeight: "16px" }}>{item.GroupName}</div>
        <ul>
          {
            item.GroupList.map((listItem) => {
              return <li key={listItem.SerialID} className="car-data-list" onClick={() => { this.getDetail(listItem.SerialID) }}>
                <img src={listItem.Picture} />
                <div><span>{listItem.AliasName}</span><div>{listItem.DealerPrice}</div></div>
              </li>
            })
          }
        </ul>
      </List.Item>);
    }) : (<List.Item >暂无该车系信息</List.Item>)
    }</List>);
    return (
      <div className="car" >
        <Drawer
          className="my-drawer"
          enableDragHandle
          position="right"
          contentStyle={{ height: 0 }}
          sidebar={sidebar}
          open={this.state.open}
          onOpenChange={this.onOpenChange}
        >
          drawer
        </Drawer>
        {
          Object.keys(carList).map((key, index) => {
            return (
              <div className="car-list" key={index} >
                <div className="home_title " >{key}</div>
                <ul className="oul">
                  {carList[key].map((item, index1) => {
                    return (
                      <li key={index1} onClick={() => {
                        this.onOpenChange(item.MasterID)
                      }}>
                        <img src={item.CoverPhoto} />
                        <span>{item.Name}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>)
          })
        }
        <div className="right-float">
          {
            carLetter.map(item => {
              return <p key={item}>{item}</p>
            })
          }
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) =>
(
  {
    carList: state.getCarList,
    carLetter: state.getCarLetter,
  }
)
const mapDispatchToProps = {
  getCarListAsycn,
  getCarFirstLetterAsycn,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
