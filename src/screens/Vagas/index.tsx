//REACT
import { useState } from 'react'
//SAFE AREA CONTEXT
import { SafeAreaView } from 'react-native-safe-area-context'
//COMPONENTS
import { Header } from '../../components/Header'
import { Background } from '../../components/Background'
import { Select } from '../../components/Selects'
import { ModalVagas } from '../../components/ModalVagas'
import { Buttons } from '../../components/Button'
//STYLES & ICONS
import { Content, DivContainer, Results, ContainerButtons } from './styles'
import { Check, Plus } from 'phosphor-react-native'

export function Vagas() {
  const [modalData, setModalData] = useState<boolean>(false)
  const [modalType, setModalType] = useState<boolean>(false)
  const [modalEXP, setModalEXP] = useState<boolean>(false)

  const [clickWeek, setClickWeek] = useState<boolean>(false)
  const [clickMonth, setClickMonth] = useState<boolean>(false)
  const [click24h, setClick24h] = useState<boolean>(false)
  const [clickAny, setClickAny] = useState<boolean>(false)

  const [clickFull, setClickFull] = useState<boolean>(false)
  const [clickTemp, setClickTemp] = useState<boolean>(false)
  const [clickStage, setClickStage] = useState<boolean>(false)

  const [clickJR, setClickJR] = useState<boolean>(false)
  const [clickPL, setClickPL] = useState<boolean>(false)
  const [clickSR, setClickSR] = useState<boolean>(false)

  function handleClickAny() {
    setClickAny(!clickAny)
  }
  function handleClickMonth() {
    setClickMonth(!clickMonth)
  }
  function handleClick24() {
    setClick24h(!click24h)
  }
  function handleClickWeek() {
    setClickWeek(!clickWeek)
  }

  function handleClickFull() {
    setClickFull(!clickFull)
  }
  function handleClickTemp() {
    setClickTemp(!clickTemp)
  }
  function handleClickStage() {
    setClickStage(!clickStage)
  }

  function handleClickJR() {
    setClickJR(!clickJR)
  }
  function handleClickPL() {
    setClickPL(!clickPL)
  }
  function handleClickSR() {
    setClickSR(!clickSR)
  }
  
  return (
    <Background>
      <SafeAreaView style={{ flex: 1 }}>
        <DivContainer>
          <Header />
          <Select 
            openData={() => setModalData(!modalData)} 
            openEXP={() => setModalEXP(!modalEXP)} 
            openType={() => setModalType(!modalType)}
            />
        </DivContainer>

        <DivContainer>
          <ModalVagas 
            visible={modalData}
            backButton={() => setModalData(!modalData)}
            overlay={() => setModalData(!modalData)}
            title='Data do anúncio'
            exit={() => setModalData(!modalData)}
            exitTitle='Exibir 1mil+ resultados'
            buttons={
              <ContainerButtons>
                <Buttons
                  onPress={handleClickAny} 
                  icon={clickAny === false ? 
                    <Plus size={16} color="#444343" weight="bold" />  :
                    <Check size={16} color="#FFFFFF" weight="bold" />
                  }
                  type={clickAny === true ? 'selected': undefined}
                  title='A qualquer momento'
                />
                <Buttons
                  onPress={handleClickMonth} 
                  icon={clickMonth === false ? 
                    <Plus size={16} color="#444343" weight="bold" />  :
                    <Check size={16} color="#FFFFFF" weight="bold" />
                  }
                  type={clickMonth === true ? 'selected': undefined}
                  title='Última mês'
                />
                <Buttons 
                  onPress={handleClick24}
                  icon={click24h === false ? 
                    <Plus size={16} color="#444343" weight="bold" />  :
                    <Check size={16} color="#FFFFFF" weight="bold" />
                  }
                  type={click24h === true ? 'selected': undefined}
                  title='Últimas 24 horas'/>
                <Buttons 
                  onPress={handleClickWeek}
                  icon={clickWeek === false ? 
                    <Plus size={16} color="#444343" weight="bold" />  :
                    <Check size={16} color="#FFFFFF" weight="bold" />
                  }
                  type={clickWeek === true ? 'selected': undefined}
                  title='Última semana'/>
              </ContainerButtons>
            }
          />
          <ModalVagas 
            visible={modalType}
            backButton={() => setModalType(!modalType)}
            overlay={() => setModalType(!modalType)}
            title='Tipo de vaga'
            exit={() => setModalType(!modalType)}
            exitTitle='Exibir 1mil+ resultados'
            buttons={
              <ContainerButtons>
                <Buttons
                  onPress={handleClickFull} 
                  icon={clickFull === false ? 
                    <Plus size={16} color="#444343" weight="bold" />  :
                    <Check size={16} color="#FFFFFF" weight="bold" />
                  }
                  type={clickFull === true ? 'selected': undefined}
                  title='Tempo integral'
                />
                <Buttons
                  onPress={handleClickTemp} 
                  icon={clickTemp === false ? 
                    <Plus size={16} color="#444343" weight="bold" />  :
                    <Check size={16} color="#FFFFFF" weight="bold" />
                  }
                  type={clickTemp === true ? 'selected': undefined}
                  title='Temporario'
                />
                <Buttons 
                  onPress={handleClickStage}
                  icon={clickStage === false ? 
                    <Plus size={16} color="#444343" weight="bold" />  :
                    <Check size={16} color="#FFFFFF" weight="bold" />
                  }
                  type={clickStage === true ? 'selected': undefined}
                  title='Estagio'/>
              </ContainerButtons>
            }
          />
          <ModalVagas 
            visible={modalEXP}
            backButton={() => setModalEXP(!modalEXP)}
            overlay={() => setModalEXP(!modalEXP)}
            title='Nível de experiência'
            exit={() => setModalEXP(!modalEXP)}
            exitTitle='Exibir 1mil+ resultados'
            buttons={
              <ContainerButtons>
                <Buttons
                  onPress={handleClickJR} 
                  icon={clickJR === false ? 
                    <Plus size={16} color="#444343" weight="bold" />  :
                    <Check size={16} color="#FFFFFF" weight="bold" />
                  }
                  type={clickJR === true ? 'selected': undefined}
                  title='Junior'
                />
                <Buttons
                  onPress={handleClickPL} 
                  icon={clickPL === false ? 
                    <Plus size={16} color="#444343" weight="bold" />  :
                    <Check size={16} color="#FFFFFF" weight="bold" />
                  }
                  type={clickPL === true ? 'selected': undefined}
                  title='Pleno'
                />
                <Buttons 
                  onPress={handleClickSR}
                  icon={clickSR === false ? 
                    <Plus size={16} color="#444343" weight="bold" />  :
                    <Check size={16} color="#FFFFFF" weight="bold" />
                  }
                  type={clickSR === true ? 'selected': undefined}
                  title='Senior'/>
              </ContainerButtons>
            }
          />
        </DivContainer>

        <Content>
          <Results>1.215 Resultados</Results>
        </Content>
      </SafeAreaView>
    </Background>
  )
}
