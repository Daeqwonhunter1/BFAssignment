
import React from 'react'
import { useState } from "react";
import { useForm } from "react-hook-form";


export default function SignNumber(props) {
    const {control, register, handleSubmit } = useForm();
    const [pNumber,setpNumber] = useState("");
    const onSubmit = data => props.handleSignNumber({
        pNumber:data.pNumber

    });

        return (
            <div id='number-form-container'>
                <label>Please Enter Phone Number To Receive Quote</label>
               <form id = "number-form" onSubmit={handleSubmit(onSubmit)} >
                  <input {...register("pNumber")} id = "phone-number" placeholder="12345678901" type = 'tel' minLength="9" maxLength="14"/>

                <input type="submit" id = "phone-number-submit" />
                </form>
            </div>
        )
    }

