
export const validateLength = (minLength, maxLength) => (value)=>{
  if(value.length < minLength) return {msg: `min length is ${minLength} chars`, valid: false}
  if(value.length > maxLength) return {msg:`max length is ${maxLength}  chars`, valid: false}
  return {msg: '', valid: true}
}

export const isEmail = (value)=>{
  const regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const result = regexp.test(value)
  if(result) return {msg: '', valid: true}
  return {msg: 'should be a valid email', valid: false}
}

export const isRequired = (fields, required) => {
  const errors = {valid: true}
  const fieldsKeys = Object.keys(fields)
  const requiredKeys = Object.keys(required)
  for(let i = 0 ; i < fieldsKeys.length; i++){
    for(let j = 0; j < requiredKeys.length; j++){
      if(fieldsKeys[i] == requiredKeys[j] && fields[fieldsKeys[i]].length < 1){
        errors[requiredKeys[j]] = 'field is required'
        errors.valid = false
      }
    }
  }

  return errors
}
