import { ValidationError } from 'yup'

interface Errors {
  [key: string]: string,
}

export default function getValidationErrors(e: ValidationError) {
  const ValidationErrors: Errors = {};

  e.inner.forEach(error => {
    if(error.path) {
      ValidationErrors[error.path] = error.message;
    }
  });

  return ValidationErrors;
}