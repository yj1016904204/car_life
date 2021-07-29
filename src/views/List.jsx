import React, { Component } from 'react'
import axios from 'axios';

export default class List extends Component {
  componentDidMount() {
    axios.get("http://baojia.chelun.com/v2-car-getMasterBrandList.html").then(res => {
      const list = res.data.data
      console.log(list);
      const newList = {}
      list.forEach(item => {
        let firstStr = item.Spelling.charAt(0)
        newList[firstStr] ? newList[firstStr].push(item) : newList[firstStr] = [item]
      })

      console.log(newList);
    })
  }
  render() {
    return (
      <div>

      </div>
    )
  }
}
