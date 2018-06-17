import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    title: PropTypes.string.isRequired,
    placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    className: PropTypes.string,
    children: PropTypes.element.isRequired
};

const defaultProps = {
    placement: 'right',
    className: undefined
};

class Tooltip extends React.PureComponent {
    componentDidMount() {
        const { $ } = window;
        $(this.selfRef).tooltip();
    }

    componentWillUnmount() {
        const { $ } = window;
        $(this.selfRef).tooltip('dispose');
    }

    selfRef;

    render() {
        const {
            children, title, placement, className
        } = this.props;
        return (
            <span
                ref={(ref) => { if (ref) this.selfRef = ref; }}
                className={`d-inline-block ${className}`}
                data-toggle="tooltip"
                data-placement={placement}
                title={title}
            >
                {children}
            </span>
        );
    }
}

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;

export default Tooltip;
