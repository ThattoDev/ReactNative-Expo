//REACT
import { ReactNode } from 'react'
import { TouchableOpacityProps } from 'react-native'
//STYLES
import { ButtonContainer, Title, EmptyBox } from './styles'

interface Props extends TouchableOpacityProps {
  title: string
  iconLeft?: ReactNode
  iconRight?: ReactNode
  type?: 'close' | 'selected' | 'linkedin' | 'signin'
  emptyBox?: Boolean
}

export function Buttons({ title, emptyBox = true, ...props }: Props) {
  return (
    <ButtonContainer types={props.type} {...props}>
      {props.iconLeft}
      {emptyBox ? props.iconRight && <EmptyBox /> : null}

      <Title
        types={props.type}
        style={{
          marginRight: props.iconRight ? 10 : 0,
          marginLeft: props.iconLeft ? 0 : 0
        }}
      >
        {title}
      </Title>

      {props.iconRight}
      {emptyBox ? props.iconLeft && <EmptyBox /> : null}
    </ButtonContainer>
  )
}
