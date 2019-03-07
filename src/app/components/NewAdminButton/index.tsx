import React, { ReactElement, Fragment } from 'react';
import { withHover, Params } from '../../hoc/withHover';
import { Button, Tooltip } from '../../ui';
import { NEW_ADMIN_URI } from '../../../config';

const NewAdmin = ({ hovering }: Params): ReactElement<any> => {
  const _name: string = 'S+';
  const _description: string = 'Поиск в новой админке';

  const _handleClick = (): void => {
    const email: string = document.querySelector('span.email').innerHTML;
    window.open(`${NEW_ADMIN_URI}${email}`, '_blank').focus();
  }

  return (
    <Fragment>
      <Button 
        onClick={_handleClick}
        name={_name}
      />
      { hovering && <Tooltip description={_description} /> }
    </Fragment>
  )
}

export const NewAdminButton = withHover(NewAdmin);