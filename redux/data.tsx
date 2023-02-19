import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {Person, Contact, Data} from './../services/DataService'

const initialStateValue: Data = {
    person: { name: '', surname: '' },
    contact: {email: '', cell_no: ''}, 
    loading: true, 
}

export const dataSlice = createSlice({
  name: 'data',
  initialState: { value: initialStateValue},
  reducers: {
    personData: (state, action: PayloadAction<Person>) => {
      state.value.person = action.payload
    },
    contactData: (state, action: PayloadAction<Contact>) => {
      state.value.contact = action.payload
    },
    updateData: (state, action: PayloadAction<Data>) => {
      state.value = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { personData, contactData, updateData } = dataSlice.actions

export default dataSlice.reducer