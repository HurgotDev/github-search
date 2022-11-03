import { ChangeEventHandler, useState } from 'react'
import { searchUserRequestAction } from 'redux/actions/search.actions'
import { selectSearchError, selectSearchLoading, selectSearchUsers } from 'redux/selectors/search.selectors'
import useAppDispatch from 'shared/hooks/redux/useAppDispatch'
import useAppSelector from 'shared/hooks/redux/useAppSelector'

const useSearch = () => {
    const [search, setSearch] = useState('')
    const users = useAppSelector(selectSearchUsers())
    const loading = useAppSelector(selectSearchLoading())
    const error = useAppSelector(selectSearchError())

    const dispatch = useAppDispatch()

    const handleSearch = () => {
        if (loading || !search) return
        dispatch(searchUserRequestAction(search))
    }

    const handleSetSearch: ChangeEventHandler<HTMLInputElement> = e => {
        setSearch(e.target.value)
    }

    return {
        users,
        loading,
        error,
        handleSearch,
        handleSetSearch,
    }
}

export default useSearch
