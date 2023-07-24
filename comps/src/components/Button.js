import PropTypes from 'prop-types';
import classname from 'classnames';


function Button( { 
    children,
    primary,
    secondary,
    danger,
    success,
    warning,
    rounded,
    outline,
    ...rest
} ) {
    const classes = classname('py-1.5 px-3 border border-solid border-2',{
        'bg-blue-500 border-blue-400 text-white' : primary,
        'bg-gray-400 border-gray-900 text-white' : secondary,
        'bg-red-500 border-red-400 text-white' : danger,
        'bg-green-500 border-green-400 text-white' : success,
        'bg-orange-500 border-orange-400 text-white' : warning,
        'rounded-full' : rounded,
        'bg-white' : outline,
        'text-blue-700' : outline && primary,
        'text-gray-900' : outline && secondary,
        'text-red-700' : outline && danger,
        'text-green-700' : outline && success,
        'text-orange-700' : outline && warning
    })
    return (
        <button {...rest} className={classes}>{children}</button>
    )
}

Button.propTypes = {
    checkVariationValue: ({ primary, secondary, success, warning, danger}) => {
        // Number(true) = 1
        // Number(false) = 0
        // Number(undefined) = NaN
        // !!undefined = false => Number(!!undefined) = 0
        
        const count = Number(!!primary) + Number(!!secondary) + Number(!!success) + Number(!!warning) + Number(!!danger) ;
        
        if(count > 1) {
            return new Error ('Only one variation from [primary, secondary, success, warning, danger] is allowed as props ');
        }
    }
};

export default Button;