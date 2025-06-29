import React from 'react'
import { Fragment } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { CarIcon, DocumentIcon, LocationIcon, RightArrowIcon, SettingIcon } from '../Components/Icon/Icon'
import { useState } from 'react'

import SecLocation from "./../Components/Pages/Step/Location"
import ChooseCar from "./../Components/Pages/Step/ChooseCar"
import Personalize from "./../Components/Pages/Step/Personalize"
import Confirmation from "./../Components/Pages/Step/Confirmation"

const Booking = () => {
    const [tabActiveId, settabActiveId] = useState(1)
    const dataTab = [
        {
            id: 1,
            icon: <LocationIcon color={1 <= tabActiveId ? "#1E19D8" : "#737373"} />,
            title: "Location & Dates",
        },
        {
            id: 2,
            icon: <CarIcon color={2 <= tabActiveId ? "#1E19D8" : "#737373"} />,
            title: "Choose Your Best",
        },
        {
            id: 3,
            icon: <SettingIcon color={3 <= tabActiveId ? "#1E19D8" : "#737373"} />,
            title: "Personalize",
        },
        {
            id: 4,
            icon: <DocumentIcon color={4 <= tabActiveId ? "#1E19D8" : "#737373"} />,
            title: "Confirmation",
        },
    ]

    const [selectCar, setselectCar] = useState("")

    const showContent = (e) => {
        switch (e) {
            case 1:
                return <SecLocation />
            case 2:
                return <ChooseCar selectCar={selectCar} setselectCar={(e) => setselectCar(e)} />
            case 3:
                return <Personalize />
            default:
                return <Confirmation />
        }
    }

    return (
        <Fragment>
            <section>
                <Container>
                    <div className="py-6 border-t border-b border-solid border-[#E5E5E5] w-full mb-10 overflow-auto no-scrollbar">
                        <div className="flex items-center justify-center gap-3 w-[920px] lg:w-full">
                            {
                                dataTab.map((obj, i) => {
                                    return <Fragment>
                                        <div onClick={() => settabActiveId(obj.id)} className={"flex items-center gap-2 text__16 px-4 py-2 border border-solid rounded-full cursor-pointer " + (obj.id <= tabActiveId ? "!border-Mblue text-Mblue bg-[#EDEDFC]" : '!border-[#E5E5E5] text-[#737373]')}>
                                            {obj.icon} <span>{obj.title}</span>
                                        </div>
                                        {
                                            (i + 1) < dataTab.length ? <RightArrowIcon color="#737373" /> : ""
                                        }
                                    </Fragment>
                                })
                            }
                        </div>
                    </div>

                    <div className="mb-6">
                        {
                            showContent(tabActiveId)
                        }
                    </div>

                    <div className={"items-center justify-end gap-3 " + (tabActiveId <= 3 ? "flex" : "hidden")}>
                        <span className={'font-medium text__18 text-[#A3A3A3] ' + (tabActiveId == 4 ? "hidden" : "")}>Go to step {tabActiveId == 3 ? "finalize" : tabActiveId + 1}</span>
                        <div onClick={() => tabActiveId <= 3 ? settabActiveId(tabActiveId + 1) : ''} className="inline-block cursor-pointer font-medium text__16 text-Mwhite !rounded-[24px] !border-Mblue bg-Mblue btnClass cursor-pointer">Continue</div>
                    </div>

                </Container>
            </section>
        </Fragment >
    )
}

export default Booking
