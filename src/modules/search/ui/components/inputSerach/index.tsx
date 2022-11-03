import type { FC } from 'react'

import { SearchOutlined } from '@ant-design/icons'
import useSearch from 'modules/search/lib/useSearch'
import { Button } from 'antd'

import { Input, InputWrapper } from './styled'

const InputSearch: FC = () => {
    const { handleSetSearch, handleSearch } = useSearch()

    return (
        <InputWrapper>
            <SearchOutlined className="icon text-white" />
            <Input onChange={handleSetSearch} />
            <Button className="button" type="primary" onClick={handleSearch}>
                Search
            </Button>
        </InputWrapper>
    )
}

export default InputSearch
