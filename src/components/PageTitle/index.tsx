import React from 'react';
import PropTypes from 'prop-types';
import IPageTitleProps from './IPageTitleProps';

export const PageTitle = (props: IPageTitleProps) => {
  const { step, title, className } = props;

  return (
    <div className={className}>
        <span>{step}</span>
        <span>{title}</span>
    </div>
  );
};

PageTitle.propTypes = {
  step: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};