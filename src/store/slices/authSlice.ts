import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type AuthState = {
  user: { id:string, name?:string, email?:string } | null
}

const initialState: AuthState = { user: null }

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<any>) {
      state.user = action.payload
    },
    clearUser(state) {
      state.user = null
    }
  }
})

export const { setUser, clearUser } = slice.actions
export default slice.reducer
