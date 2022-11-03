import { Provider } from 'react-redux'
import reduxStore from 'redux/redux-store'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Search from 'modules/search'
import Profile from 'modules/profile'
import MainLayout from 'shared/components/layouts/main.layout'
import { GlobalStyles } from 'shared/styles/global.styled'

function App() {
    return (
        <Provider store={reduxStore}>
            <GlobalStyles />
            <MainLayout>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/">
                            <Search.SearchPage />
                        </Route>
                        <Route exact path="/profile/:username">
                            <Profile.ProfilePage />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </MainLayout>
        </Provider>
    )
}

export default App
