import React, { useState } from 'react'
import { Button, Col, InputNumber, Row } from "antd"
import styled from "styled-components"




const StyledCalculator = styled.div`
    padding: 0 100px;
    margin: 0 auto;
    .calculator {
        padding-top: 25px;
        label {
            display: block;
            font-size: 16px;
            font-weight: bold;
            color: #636363;
        }
        .ant-input-number {
            width: 100%;
            padding: 5px;
            margin-top: 5px;
        }
        button {
            height: 51px;
            padding: 15px 25px;
            margin: 0 auto;
            display: block;
        }
        .total {
            text-align: center;
            font-weight: bold;
        }
        .sad-man {
            width: 300px;
            margin: 0 auto;
            display: block;
        }
    }

`

const Calculator = () => {

    const [years, setYears] = useState(0);
    const [cigarettes, setSigarettes] = useState(0);
    const [howMuch, setHowMuch] = useState(0);
    const [fullMoney, setFullMoney] = useState(0);

    const calculate = () => {
        const oneDayPack = cigarettes / 20
        const oneYearPack = oneDayPack * 365;
        const oneYearPacksMoney = oneYearPack * howMuch;
        const fullYearsPacksMoney = oneYearPacksMoney * years;
        setFullMoney(parseInt(fullYearsPacksMoney));
    }

    return (
        <StyledCalculator>
            <div className="calculator">
                <Row gutter={[24, 24]}>
                    <Col span={8}>
                        <div className="step">
                            <label>How years do you smoking?</label>
                            <InputNumber onChange={setYears} />
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="step">
                            <label>How many cigarettes do you smoke in a day?</label>
                            <InputNumber onChange={setSigarettes} />
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="step">
                            <label>How much does a pack of cigarettes cost?</label>
                            <InputNumber onChange={setHowMuch} placeholder={"$"} />
                        </div>
                    </Col>
                    <Col span={24}>
                        <Button type="primary" onClick={calculate}>Go Calculate !</Button>
                    </Col>
                    <Col span={24}>
                        {
                            fullMoney > 0 ?
                                <div>
                                    <h2 className="total">You already spend ${fullMoney}</h2>
                                    <img alt="sad man" class="sad-man" src={process.env.PUBLIC_URL + '/sad.png'} />
                                </div>
                                : ""
                        }
                    </Col>
                </Row>
            </div>
        </StyledCalculator>
    )
}

export default Calculator