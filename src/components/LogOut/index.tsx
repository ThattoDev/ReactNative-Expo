//STYLES
import {
  BackButton,
  ItemMenu,
  ModalContainer,
  ModalText,
  ModalTitle,
  ModalView,
  Options,
  Overlay
} from './styles'
//REACT
import { TouchableOpacity, Modal } from 'react-native'
//NAVIGATION
import { useNavigation } from '@react-navigation/native'
//PHOSPHOR
import { XCircle } from 'phosphor-react-native'
import { useHeader } from '../../hooks/useHeader'

interface Props {
  overlay: VoidFunction
  backButton: VoidFunction
  visible: boolean
  yesConfirm: VoidFunction
}

export function LogOut(props: Props) {
  const { navigate } = useNavigation()
  const { isMenuOpen, setIsMenuOpen } = useHeader()

  

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.visible}
      onRequestClose={props.backButton}
    >
      <ModalContainer>
        <Overlay>
          <ModalView style={{ elevation: 20 }}>
            <ModalTitle>
              <ModalText>Deseja realmente sair?</ModalText>
              <BackButton onPress={props.backButton}>
                <XCircle size={32} color="#000" weight="regular" />
              </BackButton>
            </ModalTitle>

            <Options>
              <TouchableOpacity onPress={props.yesConfirm}>
                <ItemMenu>SIM</ItemMenu>
              </TouchableOpacity>
              <TouchableOpacity onPress={props.backButton}>
                <ItemMenu>NÃO</ItemMenu>
              </TouchableOpacity>
            </Options>
          </ModalView>
        </Overlay>
      </ModalContainer>
    </Modal>
  )
}
