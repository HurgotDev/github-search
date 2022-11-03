export default interface IUser {
    id: number
    login: string
    node_id: string
    avatar_url: string
    gravatar_id: string
    url: string
    html_url: string
    followers_url: string
    following_url: string
    gists_url: string
    starred_url: string
    subscriptions_url: string
    organizations_url: string
    repos_url: string
    events_url: string
    received_events_url: string
    type: string
    site_admin: boolean
    score: number
}

export interface IUserExtended extends Omit<IUser, 'score'> {
    name: string
    company: string | null
    blog: string
    location: string
    email: string
    hireable: unknown | null
    bio: string
    twitter_username: string | null
    public_repos: number
    public_gists: number
    followers: number
    following: number
    created_at: string
    updated_at: string
}
