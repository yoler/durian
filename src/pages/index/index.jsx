/* eslint-disable import/first */
import { View, ScrollView, Swiper, SwiperItem, Image } from '@tarojs/components'
import Taro, {useLoad, useShareAppMessage } from '@tarojs/taro'
import { useState } from 'react'
import './index.less'
import jinrishici from '@/utils/jinrishici.js'
import bg0 from '@/images/bg0.jpg'
import bg1 from '@/images/bg1.jpg'
import bg2 from '@/images/bg2.jpg'
import bg3 from '@/images/bg3.jpg'
import bg4 from '@/images/bg4.jpg'
import bg5 from '@/images/bg5.jpg'
import bg6 from '@/images/bg6.jpg'
import bg7 from '@/images/bg7.jpg'
import bg8 from '@/images/bg8.jpg'

const images = [
  bg0,
  bg1,
  bg2,
  bg3,
  bg4,
  bg5,
  bg6,
  bg7,
  bg8,
]




export default function Index() {
  let [data, setData] = useState([])
  useLoad(() => {
    Taro.showLoading({
      title: '加载中',
    })
    getData()
  })

  useShareAppMessage(() => {})

  let getData = () => {
    if (data.length === 0) {
      let p1 = new Promise((r) => {
        jinrishici.load(result => {
          if (result.data.content.length > 12) {
            result.data.content = result.data.content.replace('，', '，\n')
          }
          r({data: result.data, bg: Math.floor(Math.random() * 9)})
        })
      })
      let p2 = new Promise((r) => {
        jinrishici.load(result => {
          if (result.data.content.length > 12) {
            result.data.content = result.data.content.replace('，', '，\n')
          }
          r({data: result.data, bg: Math.floor(Math.random() * 9)})
        })
      })
      let p3 = new Promise((r) => {
        jinrishici.load(result => {
          if (result.data.content.length > 12) {
            result.data.content = result.data.content.replace('，', '，\n')
          }
          r({data: result.data, bg: Math.floor(Math.random() * 9)})
        })
      })
      Promise.all([p1, p2, p3]).then(list => {
        setData([...data, ...list])
        Taro.hideLoading()
      })
    } else {
      let p1 = new Promise((r) => {
        jinrishici.load(result => {
          if (result.data.content.length > 12) {
            result.data.content = result.data.content.replace('，', '，\n')
          }
          r({data: result.data, bg: Math.floor(Math.random() * 9)})
        })
      })
      Promise.all([p1]).then(list => {
        setData([...data, ...list])
      })
    }
  }

  let handleChange = (event) => {
    if(event.detail.current == data.length -2) {
      getData()
    }
  }

  return (
    <Swiper
      className='swiper'
      vertical
      cacheExtent={3}
      onChange={handleChange}
    >
      {
        data.map((item, index) => <SwiperItem key={item.data.id}>
          <View className='swiper-item'>
            <View className='swiper-item-image'>
                <Image mode='aspectFill' src={images[item.bg]} />
                <View className='mask'></View>
            </View>
            <ScrollView scrollY className='content'>
              <View className='title'>{item.data.content}</View>
              <View className='tag-box'>
                {item.data.matchTags.length !== 0 && '标签：'}
                {
                  item.data.matchTags.map(tag => <View key={tag} className='tag-item'>{tag}</View>)
                }
              </View>
              <View className='origin'>
                <View className='author'>《{item.data.origin.title}》· {item.data.origin.author}</View>
                {
                  item.data.origin.content.map(i => <View key={i} className='origin-item'>{i}</View>)
                }
              </View>
              {
                index === 0 && 
                <View className='tip'>
                上滑查看下一条
                </View>
              }
            </ScrollView>
          </View>
        </SwiperItem>)
      }
        
      </Swiper>
  )
}
