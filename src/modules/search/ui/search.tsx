import type { FC } from 'react'

import { Typography, Row, Col, Spin } from 'antd'

import useSearch from '../lib/useSearch'

import InputSearch from './components/inputSerach'
import SearchHit from './components/searchHit/indext'

const SearchPage: FC = () => {
    const { users, loading, error } = useSearch()

    return (
        <>
            <Row gutter={[8, 16]}>
                <Col xs={12}>
                    <Typography.Title className="text-white" level={4}>
                        DevFinder
                    </Typography.Title>
                </Col>
                <Col xs={24}>
                    <InputSearch />
                </Col>

                <Col xs={24}>
                    {!loading && !error && users.map((user, i) => <SearchHit key={`search-hit-${i}`} data={user} />)}
                </Col>
            </Row>
            {loading && (
                <Row className="ant-row-center">
                    <Col xs={2}>
                        <Spin />
                    </Col>
                </Row>
            )}
            {error && (
                <Row className="ant-row-center">
                    <Col className="text-white">
                        <Typography.Title className="text-white" level={2}>
                            Ops!
                        </Typography.Title>
                    </Col>
                </Row>
            )}
        </>
    )
}

export default SearchPage
