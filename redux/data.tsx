import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {Person, Contact, DataType} from './../services/DataService'

const initialStateValue: DataType = {
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
    updateData: (state, action: PayloadAction<DataType>) => {
      state.value = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { personData, contactData, updateData } = dataSlice.actions

export default dataSlice.reducer