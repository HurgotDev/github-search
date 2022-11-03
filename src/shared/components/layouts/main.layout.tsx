import type { FC, ReactNode } from 'react'

import { Row, Col } from 'antd'

import { Main } from './styled'

const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <Main>
            <Row className="ant-row-center" gutter={[24, 24]}>
                <Col md={14} xs={24}>
                    {children}
                </Col>
            </Row>
        </Main>
    )
}

export default MainLayout
