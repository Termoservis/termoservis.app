import classnames from 'classnames';

export const resolveColumnClassName = props => classnames(
    props && props.to && 'link',
    props && props.number && 'number',
    props && props.actions && 'actions',
    props && props.className
);

export default {
    resolveColumnClassName
};
