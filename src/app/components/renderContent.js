import React from 'react'
import MainTitle from './MainTitle'
import Text from './Text'
import ListWithTitles from './ListWithTitles'
import Img from './Img'
import ListBullet from './ListBullet'
import Paragraph from './Paragraph'
import { v4 } from 'uuid'
import Separator from './Separator'
import Subtitle from './Subtitle'
import ListBold from './ListBold'
import VideoEmbed from './VideoEmbed'
import Title from './Title'

export default function renderContent(content) {
  if (content.tipo == "titulo-principal") return (
    <MainTitle key={v4()} c={content} />
  )
  if (content.tipo == "texto-comun") return (
    <Text key={v4()} c={content} />
  )
  if (content.tipo == "lista-con-titulos") return (
    <ListWithTitles key={v4()} c={content} />
  )
  if (content.tipo == "imagen") return (
    <Img key={v4()} c={content} />
  )
  if (content.tipo == "video") return (
    <VideoEmbed key={v4()} c={content} />
  )
  if (content.tipo == "lista-bullet") return (
    <ListBullet key={v4()} c={content} />
  )
  if (content.tipo == "texto-parrafo") return (
    <Paragraph key={v4()} c={content} />
  )
  if (content.tipo == "separador") return (
    <Separator key={v4()} />
  )
  if (content.tipo == "titulo") return (
    <Title key={v4()} c={content} />
  )
  if (content.tipo == "subtitulo") return (
    <Subtitle key={v4()} c={content} />
  )
  if (content.tipo == "lista-negrita") return (
    <ListBold key={v4()} c={content} />
  )
}
