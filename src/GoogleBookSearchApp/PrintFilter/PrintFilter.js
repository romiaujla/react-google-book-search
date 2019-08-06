import React, {Component} from 'react';

export default class PrintFilter extends Component {
    
    static defaultProps = {
        printFilters: [],
        printType: '',
        setPrintType: () => {}
    }

    render(){

        const pFilters = this.props.printFilters.map((filter, index) => {
            const key = Object.keys(filter)[0];
            return <option value={key} key={index}>{filter[key]}</option>;
        })

        return (
            <div className='print-type-filter inline-div'>
                <label htmlFor='print-type-filter'>
                    Print Type: 
                </label>
                <select 
                    id='print-type-filter' 
                    name='print-type-filter' 
                    defaultValue={this.props.printType} 
                    onChange={(e) => this.props.setPrintType(e.target.value)}
                >
                    {pFilters}
                </select>
            </div>
        );
    }
}