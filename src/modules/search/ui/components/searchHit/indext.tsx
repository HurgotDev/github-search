import type { FC } from 'react'

import { Link } from 'react-router-dom'
import { Card, Avatar, Space, Button, Typography, Row, Col } from 'antd'
import IUser from 'shared/@types/IUser'

const SearchHit: FC<{ data: IUser }> = ({ data }) => {
    return (
        <Card style={{ marginBottom: 20, background: '#1f2a48', border: '1px solid #1f2a48', borderRadius: 12 }}>
            <Card.Meta
                avatar={<Avatar src={data.avatar_url} />}
                description={<Typography.Text className="text-white">Type: {data.type}</Typography.Text>}
                title={
                    <Typography.Title className="text-white" level={5}>
                        @{data.login}
                    </Typography.Title>
                }
            />
            <Row className="ant-row-end">
                <Col xs={2}>
                    <Space>
                        <Button size="small" type="link">
                            <Link to={`/profile/${data.login}`}>View profile</Link>
                        </Button>
                    </Space>
                </Col>
            </Row>
        </Card>
    )
}

export default SearchHit
