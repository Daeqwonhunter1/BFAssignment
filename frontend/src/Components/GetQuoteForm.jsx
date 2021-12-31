import React, { Component } from 'react'
import DatePicker from "react-datepicker";
import { Controller,useForm } from "react-hook-form";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

export default function GetQuoteForm(props) {
    const {control, register, handleSubmit } = useForm();
    const [result,setResult] = useState("")
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const onSubmit = data => props.handleQuoteForm({
            age:data.age,
            currency_id:data.currency_id,
            start_date: data.date_input[0],
            end_date: data.date_input[1]
    
    });
    
    

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("age")} placeholder='age' type = 'number'/>
                <input {...register("currency_id")} placeholder='currency_id' type = 'text'/>
                <Controller
                    control={control}
                    name='date_input'
                    render={({ field }) => (
                       
                    <DatePicker
                        selectsRange={true}
                        placeholderText={field.value}
                        startDate={startDate}
                        endDate={endDate}
                        onChange={(update) => {
                            setDateRange(update);
                            field.onChange(update);
                          }}
                        
                        withPortal
                    />
                    

                    
                )}
                />
               
                <input type="submit" />
            </form>

        <p>{result} </p>
            
        </div>
    )
}
// export default class getQuoteForm extends Component {
//     state={
//         age:"",
//         currency_id:"",
//         start_date:new Date(),
//         end_date:new Date(),
//         dateRange:null,
     
//     }

//     handleChange = (e) => {
//         const {name,value} = e.target;
//         this.setState({ [name]:value})
//     }


//     render() {
//         return (
//             <div>
//                  <form onSubmit = {(e) => {
//                     e.preventDefault();
//                     this.props.handleQuoteForm(this.state);
//                     this.setState({
//                         age:"",
//                         currency_id:"",
//                         start_date:"",
//                         end_date:""
                        
//                     })
//                 }}>
//                 <label>Age:</label><br/>
//                 <input 
//                 name="age"
//                 id = "age"
//                 type = "number"
//                 value = {this.state.age}
//                 onChange = {this.handleChange}
//                 >
//                 </input>
//                 <input 
//                 name="currency_id"
//                 id = "currency-id"
//                 type = "text"
//                 value = {this.state.currency_id}
//                 onChange = {this.handleChange}
//                 >
//                 </input>
//                 <DatePicker
//                     selectsRange={true}
//                     startDate={this.state.start_date}
//                     endDate={this.state.end_date}
//                     onChange={this.state.dateRange}
//                     withPortal
//                 />
//                 {/* <DatePicker selected={this.state.start_date} onChange={(date) => this.setState({ start_date:date})} />
//                 <DatePicker selected={this.state.end_date} onChange={(date) => this.setState({ end_date:date})} /> */}
//                 <button>Submit</button>
//                 </form>
//             </div>
//         )
//     }
// }
