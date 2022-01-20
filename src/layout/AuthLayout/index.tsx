import React, { ReactNode, useEffect } from 'react'
import { Col, Row, Typography } from 'antd'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

// import { selectAuthState } from '@modules/auth/authSelector'

import './styles.less'

type Props = {
    children: ReactNode | JSX.Element
}

const AuthLayout = ({ children }: Props) => {
    const history = useHistory()
    // const isAuth = useSelector(selectAuthState)

    // useEffect(() => {
    //     if (isAuth) {
    //         history.push('/')
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [isAuth])

    return (
        <Row className="h-screen bg-gray-50">
            <Col xs={0} lg={12} className="auth-layout__image"></Col>
            <Col className="flex justify-center items-center" xs={24} lg={12}>
                <Row
                    className="bg-white px-10 py-10 rounded-lg shadow-lg border"
                    style={{ width: '33rem', maxWidth: '33rem' }}
                >
                    <Col className="mb-5" xs={24}>
                        <Typography.Title className="text-center" level={1}>
                            Fika CMS
                        </Typography.Title>
                    </Col>
                    <Col xs={24}>{children}</Col>
                </Row>
            </Col>
        </Row>
    )
}

export default AuthLayout
