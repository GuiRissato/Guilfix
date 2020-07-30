/* eslint-disable react/jsx-indent */
/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const FormFieldWrapper = styled.div`
  position: relative;
    textarea {
     min-height: 150px;
  }
  input[type="color"] {
    padding-left: 56px;
  }
`;

const Label = styled.label``;

Label.Text = styled.span`
  color: #E5E5E5;
  height: 57px;
  position: absolute; 
  top: 0;
  left: 16px;
  
  display: flex;
  align-items: center;
  
  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  
  transition: .1s ease-in-out;
`;

const Input = styled.input`
background: #53585D;
  color: #F5F5F5;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;
  
  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585D;
  
  padding: 16px 16px;
  margin-bottom: 45px;
  
  resize: none;
  border-radius: 4px;
  transition: border-color .3s;
  
  &:focus {
    border-bottom-color: var(--primary);
  }
/* quando clicar no campo para preencher o texto fixado dentro do campo vai diminuir e subir para dar foco no que 
o usuario esta escrevendo */
  &:focus:not([type='color']) + ${Label.Text} {
    transform: scale(.6) translateY(-10px);
  }
  /* vai manter as proporcoes a cima quando o usuario terminar de escrever no campo */
  ${({ value }) => {
    const hasValue = value.length > 0;
    return hasValue && css`
        &:not([type='color']) + ${Label.Text} {
          transform: scale(.6) translateY(-10px);
        }
      `;
  }
}
`;

function FormField({
  label, type, name, value, onChange,
}) {
  const filedId = `id${name}`;
  let tag;
  if (type === 'textarea') {
    tag = 'textarea';
  } else {
    tag = 'input';
  }

  return (
    <FormFieldWrapper>
      <Label
        htmlFor={filedId}
      >
            <Input
              as={tag}
              id={filedId}
              type={type}
              value={value}
              name={name}
              onChange={onChange}
            />
      <Label.Text>
        {label}
      </Label.Text>
      </Label>
    </FormFieldWrapper>

  );
}
// propTypes vai dizer o q espera de resposta variavel
FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
};

FormField.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FormField;
