import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    title: PropTypes.string.isRequired,
    placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left'])
};

const defaultProps = {
    placement: 'right'
};

class Tooltip extends React.PureComponent {
    selfRef;

    componentDidMount() {
        const $ = window.$;
        $(this.selfRef).tooltip();
    }

    render() {
        const { children, title, placement, className } = this.props;
        return (
            <span
                ref={(ref) => { if (ref) this.selfRef = ref; }}
                className={`d-inline-block ${className}`}
                data-toggle="tooltip" 
                data-placement={placement}
                title={title}>
                {children}
            </span>
        );
    }
}

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;

export default Tooltip;
