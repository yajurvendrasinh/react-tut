import PropTypes from 'prop-types';
import classname from 'classnames';

const final = classname('abc', 'fds')
console.log(final)
function Button( { 
    children,
    primary,
    secondary,
    danger,
    success,
    warning,
    rounded,
    outline
} ) {
    return (
        <button className='py-1.5 px-3 text-white border-solid border-2 bg-blue-500 border-blue-400'>{children}</button>
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