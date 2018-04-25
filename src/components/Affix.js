import React from 'react';
import PropTypes from 'prop-types'

class Affix extends React.Component {
    constructor() {
        super();
        this.state = {
            affix: false,
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const affix = this.state.affix;
        const offset = this.props.offset;
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

        if (!affix && scrollTop >= offset) {
            this.setState({
                affix: true,
            });
        }

        if (affix && scrollTop < offset) {
            this.setState({
                affix: false,
            });
        }
        console.log(offset)
    };

    render() {
        const affix = this.state.affix ? 'affix' : '';
        const {className, ...props} = this.props;

        return (
            <div {...props} className={`${className || ''} ${affix}`}>
                {this.props.children}
            </div>
        );
    }
}

Affix.propTypes = {
    offset: PropTypes.number.isRequired,
};

export default Affix;