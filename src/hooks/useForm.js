import { useState } from 'react'

export const useForm = (onSubmit, initialValues = {}) => {
  const [values, setValues] = useState(initialValues)

  const handleSubmit = (event) => {
    if (event) event.preventDefault()
    if (onSubmit) {
      onSubmit(values)
    }
  }

  const handleChange = (event) => {
    event.persist()
    const { name, value } = event.target
    setValues((values) => ({ ...values, [name]: value }))
  }

  return [values, handleSubmit, handleChange]
}
