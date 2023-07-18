# 남자 mate의 올영 pick 대탐구 💁🏻‍♂️

> 남자도 화장하는 시대

> 정보가 없는 남성들을 위한 올영 pick 가이드

# 👀 1일차 초기세팅

- init, next, react, react-dom seting, prop-types

- Error: error:0308010C:digital envelope routines::unsupported

  > node 의 버전이 높아서 16버전으로 다운그레이드

# 2일차

- Link

  > react에서 router 가 next에서는 자체적인 Link 사용
  > 사용법) `<Link href = "/"><a> text <a/><Link/>`

- eslint 적용

  > https://eslint.org/docs/latest/rules/ eslint 규칙

- antd && style-components

  > 디자인을 위한 api

- \_app.js

  > next js page의 공통부분들을 담는 곳
  > 모든 page의 부모
  > 공통된 것을 담기때문에 import "antd/dist/antd.css" 는 여기만 있어도 됌. -> 버전이 바뀌면서 이 구문은 필요없음.

- next의 Head
  > import Head from 'next/head'로 별다른 서버 작업없이도 head tag 를 받을 수 있게해줌.

# react X next

- react 의 children props
  > react에서는 컴포넌트안에 무슨 데이터가 들어올지 모르는 경우에 사용하기위한 props이다.
  > 무슨 데이터가 들어오는지 알면 props에 name, age 이런식으로 줘도 되지만 모르는경우 { children } 을 사용하는게 유용하다.

# 리액트의 선수 지식이 필요할 것 같아 잠시 중단 ----7/18----
