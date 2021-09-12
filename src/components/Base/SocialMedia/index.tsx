import React from 'react'

import { Container } from '../../index'
import FacebookIcon from '../../../assets/images/facebook.svg'
import InstagramIcon from '../../../assets/images/instagram.svg'
import YoutubeIcon from '../../../assets/images/youtube.svg'

import * as S from './styles'

const SocialMedia = () => (
  <S.Content>
    <Container>
      <S.Title>
        Nossas mídias
      </S.Title>
      <S.List>
        <S.Item>
          <a
            href="https://www.facebook.com/novavisaoparanovotempo/"
            target="_blank"
            rel="noopener"
          >
            <S.Image src={FacebookIcon} alt="Facebook" />
          </a>
        </S.Item>
        <S.Item>
          <a
            href="https://www.instagram.com/novavisaoparanovotempo/"
            target="_blank"
            rel="noopener"
          >
            <S.Image src={InstagramIcon} alt="Instagram" />
          </a>
        </S.Item>
        <S.Item>
          <a
            href="https://www.youtube.com/channel/novavisaoparanovotempo"
            target="_blank"
            rel="noopener"
          >
            <S.Image src={YoutubeIcon} alt="Youtube" />
          </a>
        </S.Item>
      </S.List>
    </Container>
  </S.Content>
)

export default SocialMedia
