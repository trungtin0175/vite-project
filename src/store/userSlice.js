import { createSlice } from '@reduxjs/toolkit'
const initialState = { userName: null, password: null, accessToken: null }
const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload
    },
    setAll: (state, action) => {
      state = action.payload
    }
  }
})
export const { setUserName, setAll } = userSlice.actions
export default userSlice.reducer
