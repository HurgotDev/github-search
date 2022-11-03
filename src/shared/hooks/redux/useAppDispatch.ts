import { useDispatch } from 'react-redux'
import { TAppDispatch } from 'redux/@types/redux'

const useAppDispatch: () => TAppDispatch = useDispatch

export default useAppDispatch
