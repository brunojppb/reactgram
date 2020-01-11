import React, { useContext, useState } from 'react';
import {useForm} from '../../hooks/useForm';
import { GlobalNotificationContext } from '../common/NotificationSheet';
import { putUpdatePassword } from '../../network/backend';

export const EditPasswordPage = () => {

  const {showNotification} = useContext(GlobalNotificationContext);
  const [isLoading, setIsLoading] = useState(false);

  const [, onSubmit, onChange] = useForm((values) => {
    const {password, passwordConfirmation} = values;
    if (password !== passwordConfirmation) {
      showNotification('Senha e confirmação da senha não combinam.');
      return;
    }
    if(password.length < 6) {
      showNotification('Senha muito curta. mínimo de 6 caracteres');
      return;
    }
    setIsLoading(true);
    putUpdatePassword(password, passwordConfirmation)
    .then(response => {
      setIsLoading(false);
      showNotification('Senha atualizada.', false);
    }, error => {
      const {error: errorMessage} = error.response.data;
      setIsLoading(false);
      showNotification(errorMessage);
    })
  }, {password: '', passwordConfirmation: ''});

  return(
    <form className="edit-profile-container" onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="password">Nova Senha</label>
        <input type="password" 
                id="password"
                name="password" 
                placeholder="Nova senha" 
                className="form-control" 
                onChange={onChange}
                required/>
      </div>
      <div className="form-group">
      <label htmlFor="passwordConfirmation">Confirmar Senha</label>
        <input type="password" 
                id="passwordConfirmation"
                name="passwordConfirmation" 
                placeholder="Confirme a senha" 
                className="form-control" 
                onChange={onChange}
                required/>
      </div>
      <div className="form-group">
        <div></div>
        <div>
          <input type="submit" className="btn btn-primary" value="Salvar" disabled={isLoading}/>
        </div>
      </div>
    </form>
  );
}