"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "@/lib/validation";


type UserSchema = z.infer<typeof userSchema>;


export function UserForm({image}:{image:string}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSchema>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = (data: UserSchema) => {
    console.log("Form Data:", data);
  };

  return (
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 lg:space-y-0 max-w-md lg:max-w-full grow mx-auto lg:mx-0">
          <div className="lg:flex justify-between">          
      <div className="lg:w-[48%]">
        <label htmlFor="name" className="block text-sm font-normal text-left text-[#232323] pb-2"> 
          Name
        </label>
        <input
          id="name"
          type="text"
          {...register("name")}
          className="w-full rounded-md border border-gray-300 p-2 text-sm mb-4 bg-transparent border-[#DFEAF2] focus:border-[1px] focus:outline-none"
          placeholder="Charlene Reed "
        />
        {errors.name && <p className="text-sm text-red-600">{errors.name.message}</p>}
      </div>
      
      <div className="lg:w-[48%]">
        <label htmlFor="username" className="block text-sm font-normal text-left text-[#232323] pb-2">
          Username
        </label>
        <input
          id="username"
          type="text"
          {...register("username")}
          className="w-full rounded-md border border-gray-300 p-2 text-sm mb-4 bg-transparent border-[#DFEAF2] focus:border-[1px] focus:outline-none"
          placeholder="Charlene Reed"
        />
        {errors.username && <p className="text-sm text-red-600">{errors.username.message}</p>}
              </div>
              
          </div>

          <div className="lg:flex justify-between">
              <div className="lg:w-[48%]">
        <label htmlFor="email" className="block text-sm font-normal text-left text-[#232323] pb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className="w-full rounded-md border border-gray-300 p-2 text-sm mb-4 bg-transparent border-[#DFEAF2] focus:border-[1px] focus:outline-none"
          placeholder="charlenereed@gmail.com "
        />
        {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
      </div>

      <div className="lg:w-[48%]">
        <label htmlFor="password" className="block text-sm font-normal text-left text-[#232323] pb-2">
          Password
        </label>
        <input
          id="password"
          type="password"
          {...register("password")}
          className="w-full rounded-md border border-gray-300 p-2 text-sm mb-4 bg-transparent border-[#DFEAF2] focus:border-[1px] focus:outline-none"
          placeholder="**********"
        />
        {errors.password && <p className="text-sm text-red-600">{errors.password.message}</p>}
      </div>
      </div>

      
          <div className="lg:flex justify-between">
              <div className="lg:w-[48%]">
                <label htmlFor="dateOfBirth" className="block text-sm font-normal text-left text-[#232323] pb-2">
                Date of Birth
                </label>
                <input
                id="dateOfBirth"
                type="date"
                {...register("dateOfBirth")}
                className="w-full rounded-md border border-gray-300 p-2 text-sm mb-4 bg-transparent border-[#DFEAF2] focus:border-[1px] focus:outline-none"
                />
                {errors.dateOfBirth && <p className="text-sm text-red-600">{errors.dateOfBirth.message}</p>}
            </div>

            <div className="lg:w-[48%]">
                <label htmlFor="presentAddress" className="block text-sm font-normal text-left text-[#232323] pb-2">
                Present Address
                </label>
                <input
                id="presentAddress"
                type="text"
                {...register("presentAddress")}
                className="w-full rounded-md border border-gray-300 p-2 text-sm mb-4 bg-transparent border-[#DFEAF2]"
                placeholder="San Jose, California, USA"
                />
                {errors.presentAddress && (
                <p className="text-sm text-red-600">{errors.presentAddress.message}</p>
                )}
            </div>  
          </div>
    
          <div className="lg:flex justify-between">
               <div className="lg:w-[48%]">
        <label htmlFor="permanentAddress" className="block text-sm font-normal text-left text-[#232323] pb-2">
          Permanent Address
        </label>
        <input
          id="permanentAddress"
          type="text"
          {...register("permanentAddress")}
          className="w-full rounded-md border border-gray-300 p-2 text-sm mb-4 bg-transparent border-[#DFEAF2] focus:border-[1px] focus:outline-none"
          placeholder="San Jose, California, USA"
        />
        {errors.permanentAddress && (
          <p className="text-sm text-red-600">{errors.permanentAddress.message}</p>
        )}
      </div>
      <div className="lg:w-[48%]">
        <label htmlFor="city" className="block text-sm font-normal text-left text-[#232323] pb-2">
          City
        </label>
        <input
          id="city"
          type="text"
          {...register("city")}
          className="w-full rounded-md border border-gray-300 p-2 text-sm mb-4 bg-transparent border-[#DFEAF2] focus:border-[1px] focus:outline-none"
          placeholder="San Jose"
        />
        {errors.city && <p className="text-sm text-red-600">{errors.city.message}</p>}
      </div>
     </div>

          <div className="lg:flex justify-between">
                <div className="lg:w-[48%]">
        <label htmlFor="postalCode" className="block text-sm font-normal text-left text-[#232323] pb-2">
          Postal Code
        </label>
        <input
          id="postalCode"
          type="text"
          {...register("postalCode")}
          className="w-full rounded-md border border-gray-300 p-2 text-sm mb-4 bg-transparent border-[#DFEAF2] focus:border-[1px] focus:outline-none"
          placeholder="45962"
        />
        {errors.postalCode && <p className="text-sm text-red-600">{errors.postalCode.message}</p>}
      </div>

      <div className="lg:w-[48%]">
        <label htmlFor="country" className="block text-sm font-normal text-left text-[#232323] pb-2">
          Country
        </label>
        <input
          id="country"
          type="text"
          {...register("country")}
          className="w-full rounded-md border border-gray-300 p-2 text-sm mb-4 bg-transparent border-[#DFEAF2] focus:border-[1px] focus:outline-none"
          placeholder="USA"
        />
        {errors.country && <p className="text-sm text-red-600">{errors.country.message}</p>}
      </div>
    </div>

      <button
        type="submit"
        className="lg:flex w-full lg:w-min rounded-[9px] bg-[#232323] p-2 text-white hover:bg-blue-700 lg:px-[74px] lg:py-[14px] lg:rounded-[15px] lg:ml-auto"
      >
        Save
      </button>
    </form>
  );
}
