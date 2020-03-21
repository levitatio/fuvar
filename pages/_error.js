import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from '../services/i18n';

function Error ({ statusCode, t }) {
  return (
    <p>
      {statusCode
        ? t('error-with-status', { statusCode })
        : t('error-without-status')}
    </p>
  );
}
Error.getServerSideProps = async ({ res, err }) => {
  let statusCode = null;
  if (res) {
    ({ statusCode } = res);
  } else if (err) {
    ({ statusCode } = err);
  }
  return {
    namespacesRequired: ['common'],
    statusCode,
  };
};

Error.defaultProps = {
  statusCode: null,
};

Error.propTypes = {
  statusCode: PropTypes.number,
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Error);
