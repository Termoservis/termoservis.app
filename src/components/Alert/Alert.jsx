import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Motion, spring } from 'react-motion';

const propTypes = {
    color: PropTypes.oneOf(['primary', 'success', 'warning', 'danger']).isRequired,
    children: PropTypes.any.isRequired,
    className: PropTypes.string,
    colorStyle: PropTypes.oneOf(['default', 'contrast', 'iconBackground', 'iconContrast', 'icon']),
    isColoredBorder: PropTypes.bool,
    isDismissible: PropTypes.bool
};

const defaultProps = {
    className: undefined,
    colorStyle: 'default',
    isColoredBorder: false,
    isDismissible: true
};

const resolveColorIcon = (color) => {
    switch (color) {
        default:
        case 'primary': return 'info-outline';
        case 'success': return 'check';
        case 'warning': return 'alert-triangle';
        case 'danger': return 'close-circle-o';
    }
};

const Alert = ({
    className, children, color, colorStyle, isColoredBorder, isDismissible
}) => (
    <Motion defaultStyle={{ scale: 0 }} style={{ scale: spring(1, { stiffness: 200, damping: 18 }) }}>
        {value => (
            <div
                role="alert"
                className={classnames(
                    'alert',
                    isDismissible && 'alert-dismissible',
                    colorStyle === 'contrast' && 'alert-contrast',
                    colorStyle === 'iconBackground' && 'alert-icon',
                    colorStyle === 'iconContrast' && 'alert-icon alert-icon-colored',
                    colorStyle === 'icon' && 'alert-simple',
                    isColoredBorder && 'alert-icon-border',
                    `alert-${color}`,
                    className
                )}
                style={{ transform: `scale(${value.scale}, ${value.scale})` }}
            >
                <div className="icon"><span className={`mdi mdi-${resolveColorIcon(color)}`} /></div>
                <div className="message">
                    {isDismissible ?
                        <button type="button" data-dismiss="alert" aria-label="Close" className="close">
                            <span aria-hidden="true" className="mdi mdi-close" />
                        </button>
                        : null}
                    {children}
                </div>
            </div>
        )}
    </Motion>
);

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

export default Alert;
