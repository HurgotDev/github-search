import type { TypedUseSelectorHook } from 'react-redux'

import { useSelector } from 'react-redux'
import { TRootState } from 'redux/@types/redux'

const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector

export default useAppSelector
