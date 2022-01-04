import React from 'react'
import DatePicker from "react-datepicker";
import { Controller,useForm } from "react-hook-form";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";


export default function GetQuoteForm(props) {

    const {control, register, handleSubmit } = useForm();
    const [result,setResult] = useState("")
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const [selectCon, setselectCon] = useState(props.currencyList[0]);

    const onSubmit = data => props.handleQuoteForm({
            age:data.age,
            currency_id:selectCon,
            start_date: data.date_input[0],
            end_date: data.date_input[1]
    
    });
    const handleSelect = (e) => {
        const config = props.currencyList[Number(e.target.value)]
        console.log(config)
        if(config){
            setselectCon(config)
        }
    }
    

    return (
        <div id = "quote-form-container">
            <label>Please Enter Phone Number To Receive Quote</label>
            <form id = "quote-form" onSubmit={handleSubmit(onSubmit)}>
                <label>Age </label>
                <input {...register("age")} placeholder='18' type = 'number'/>
                <label>Currency</label>
                <select className="form-control" id="intlConfigSelect" onChange={handleSelect}  > 
                  {props.currencyList.map((config, i) => {
                    if (config) {
                      const { locale, currency } = config;
                      return (
                        <option key={`${locale}${currency}`} value={i}>
                          {currency}
                        </option>
                      );
                    }
                  })}
                </select>
                <br/>
                <Controller
                    control={control}
                    name='date_input'
                    render={({ field }) => (
                    <>
                    <label>Dates from</label>
                    <DatePicker
                        selectsRange={true}
                        placeholderText={"2022-01-01  - "}
                        startDate={startDate}
                        endDate={endDate}
                        onChange={(update) => {
                            setDateRange(update);
                            field.onChange(update);
                          }}
                        dateFormat = 'yyyy-MM-dd'
                        withPortal
                    />
                    </>

                    
                )}
                />
               
                <input type="submit" id = "quote-submit" />
            </form>

        <p>{result} </p>
            
        </div>
    )
}

