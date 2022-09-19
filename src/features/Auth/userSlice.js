
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import userAPI from '../../api/userAPI'
import StorageKeys from '../../constants/storage-keys'
export const register = createAsyncThunk('user/register', async (payload) => {
    // call api
    const data = await userAPI.register(payload)
    // save data to localStorage
    localStorage.setItem(StorageKeys.TOKEN, data.jwt)
    localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user))
    // return user data
    return data.user
}
)
export const login = createAsyncThunk('user/login', async (payload) => {
    // call api
    const data = await userAPI.login(payload)
    // save data to localStorage
    localStorage.setItem(StorageKeys.TOKEN, data.jwt)
    localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user))
    // return user data
    return data.user
}
)
const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
        settings: {},
    },
    reducers: {
        logout(state) {
            localStorage.removeItem(StorageKeys.USER)
            localStorage.removeItem(StorageKeys.TOKEN)
            state.current = {}
        }
    },
    extraReducers: {
        // 'user/register/fulfilled' tự định nghĩa
        [register.fulfilled]: (state, action) => {
            state.current = action.payload
        },
        [login.fulfilled]: (state, action) => {
            state.current = action.payload
        }
    }
})

const { actions, reducer } = userSlice
export const { logout } = actions
export default reducer
