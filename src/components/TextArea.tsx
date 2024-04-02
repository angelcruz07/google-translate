import { Form } from 'react-bootstrap'
import { SectionType, type PropsTextArea } from '../types.d'
import React from 'react'

const commonStyles = { boder: 0, height: '200px', resize: 'none' }

const getPlaceHolder = ({
  type,
  loading
}: {
  type: SectionType
  loading?: boolean
}) => {
  if (type === SectionType.From) return 'Introducir texto'
  if (loading === true) return 'Cargando...'
}

export const TextArea = ({ type, value, onChange, loading }: PropsTextArea) => {
  const styles =
    type === SectionType.From
      ? { ...commonStyles, backgroundColor: '#f5f5f5' }
      : commonStyles

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value)
  }

  return (
    <Form.Control
      as='textarea'
      autoFocus={type === SectionType.From}
      placeholder={getPlaceHolder({ type, loading })}
      disabled={type === SectionType.To}
      style={styles}
      value={value}
      onChange={handleChange}
    />
  )
}
