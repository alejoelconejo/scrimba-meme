import React from 'react'

export interface MemeImg extends MemeType {
  text1: string
  text2: string
  text3: string
  text4: string
  text5: string
}

export interface MemeType {
  box_count: number
  id: number
  name: string
  url: string
  height: number
  width: number
}
