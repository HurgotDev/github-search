import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getUserProfileAction } from 'redux/actions/profile.actions'
import { selectProfile } from 'redux/selectors/profile.selectors'
import useAppDispatch from 'shared/hooks/redux/useAppDispatch'
import useAppSelector from 'shared/hooks/redux/useAppSelector'

const useProfile = () => {
    const profile = useAppSelector(selectProfile())

    const { username } = useParams<{ username: string }>()

    const dispatch = useAppDispatch()

    const handleRetry = () => {
        dispatch(getUserProfileAction(username))
    }

    useEffect(() => {
        dispatch(getUserProfileAction(username))
    }, [])

    return {
        ...profile,
        handleRetry,
    }
}

export default useProfile
