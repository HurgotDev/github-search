import type { FC } from 'react'

import { Link } from 'react-router-dom'
import { Row, Col, Typography, Button, Spin, Card, Avatar } from 'antd'
import { ArrowLeftOutlined, EnvironmentFilled, TwitterOutlined, LinkOutlined, HomeFilled } from '@ant-design/icons'
import moment from 'moment'

import useProfile from '../lib/useProfile'

import { ProfileSubCardInfo, SubCardItem } from '.'

const ProfilePage: FC = () => {
    const { data, error, loading, handleRetry } = useProfile()

    return (
        <div>
            <Row>
                <Col>
                    <Button icon={<ArrowLeftOutlined />} type="link">
                        <Link to="/">&nbsp;Back</Link>
                    </Button>
                </Col>
            </Row>
            <Row className="ant-row-center">
                {loading && (
                    <Col>
                        <Spin />
                    </Col>
                )}
            </Row>
            {error && (
                <Row className="ant-row-center">
                    <Col>
                        <Typography.Title className="text-white" level={2}>
                            Ops!
                        </Typography.Title>
                        <Button type="primary" onClick={handleRetry}>
                            Retry
                        </Button>
                    </Col>
                </Row>
            )}
            {!loading && !error && !!data && (
                <Card style={{ marginBottom: 20, background: '#1f2a48', border: '1px solid #1f2a48', borderRadius: 12 }}>
                    <Row>
                        <Col xs={2}>
                            <Avatar size="large" src={data?.avatar_url} />
                        </Col>
                        <Col xs={18}>
                            <Row gutter={[8, 16]}>
                                <Col xs={24}>
                                    <Typography.Title className="text-white" level={5}>
                                        {data.name}
                                    </Typography.Title>
                                    <Typography.Text type="success">@{data.login}</Typography.Text>
                                </Col>
                                <Col xs={24}>
                                    <Typography.Paragraph className="text-white">
                                        {data.bio || 'This profile has no bio'}
                                    </Typography.Paragraph>
                                </Col>
                                <Col xs={24}>
                                    <ProfileSubCardInfo>
                                        <SubCardItem>
                                            <Typography.Text className="text-white">Repos</Typography.Text>
                                            <Typography.Text strong className="text-white">
                                                {data.public_repos}
                                            </Typography.Text>
                                        </SubCardItem>
                                        <SubCardItem>
                                            <Typography.Text className="text-white">Followers</Typography.Text>
                                            <Typography.Text strong className="text-white">
                                                {data.followers}
                                            </Typography.Text>
                                        </SubCardItem>
                                        <SubCardItem>
                                            <Typography.Text className="text-white">Following</Typography.Text>
                                            <Typography.Text strong className="text-white">
                                                {data.following}
                                            </Typography.Text>
                                        </SubCardItem>
                                    </ProfileSubCardInfo>
                                </Col>
                                <Col xs={24}>
                                    <Row className="ant-row-center">
                                        <Col xs={12}>
                                            <Typography.Text className="text-white">
                                                <EnvironmentFilled />
                                                &nbsp;{data.location || 'Not available'}
                                            </Typography.Text>
                                        </Col>
                                        <Col xs={12}>
                                            <Typography.Text className="text-white">
                                                <TwitterOutlined />
                                                &nbsp;{data.twitter_username || 'Not available'}
                                            </Typography.Text>
                                        </Col>
                                        <Col xs={12}>
                                            <Typography.Text className="text-white">
                                                <LinkOutlined />
                                                &nbsp;{data.url || 'Not available'}
                                            </Typography.Text>
                                        </Col>
                                        <Col xs={12}>
                                            <Typography.Text className="text-white">
                                                <HomeFilled />
                                                &nbsp;{data.company || 'Not available'}
                                            </Typography.Text>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={4}>
                            <Typography.Text className="text-white">
                                Joined {moment(data.created_at).from(moment())}
                            </Typography.Text>
                        </Col>
                    </Row>
                </Card>
            )}
        </div>
    )
}

export default ProfilePage
